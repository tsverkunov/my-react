import React from 'react';
import style from './Description.module.sass';
import yesIcon from "../../../common/img/yes.png"
import noIcon from "../../../common/img/no.png"
import userIcon from "../../../common/img/users_icon.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const Description = ({profile, status, updateStatus}) => {
   return (
      <div className={style.wrap}>
         <div>
            <img alt=''
                 className={style.avatar}
                 src={profile.photos.large != null
                    ? profile.photos.large
                    : userIcon}
            />
         </div>
         <div className={style.userDescription}>
            <h2>{profile.fullName}</h2>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
            />
            <p><span>О себе: </span>{profile.aboutMe}</p>
            <span>Я в сети:</span><br/>
            <p><a href={profile.contacts.facebook}>{profile.contacts.facebook}</a></p>
            <p><span>О работе: </span>{profile.lookingForAJobDescription}</p>
            <div className={style.work}>В посках работы:
               <img alt=''
                    src={profile.lookingForAJob ? yesIcon : noIcon}
               />
            </div>
         </div>
      </div>
   )
}


export default Description;