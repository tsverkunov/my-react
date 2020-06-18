import React from "react";
import style from './Description.module.sass';
import yesIcon from "../../../common/img/yes.png";
import noIcon from "../../../common/img/no.png";
import editIcon from "../../../common/img/editing_icon.svg";


const ProfileData = ({profile, isOwner, activateEditMode}) => {
   return (
      <div className={style.profileDataWrapp}>
         <p>About me: <span>{profile.aboutMe}</span></p>
         <p>My professional skills: <span>{profile.lookingForAJobDescription}</span></p>
         <div className={style.work}><p>Looking for a job:</p>
            <img alt=''
                 src={profile.lookingForAJob ? yesIcon : noIcon}
            />
         </div>
         <div className={style.editItem}>
            <p>Online:</p>

            <div className={style.editIcon}>
               {isOwner && <img src={editIcon} alt="" onClick={activateEditMode}/>}
            </div>
         </div>
         {Object.keys(profile.contacts).map(key => {
            return <div className={style.contact} key={key}>
               <a href={profile.contacts[key]}>{profile.contacts[key]}</a>
            </div>
         })}
      </div>
   );
}


export default ProfileData;
