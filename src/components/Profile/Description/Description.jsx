import React from 'react';
import style from './Description.module.sass';
import yesIcon from "../../../common/img/yes.png"
import noIcon from "../../../common/img/no.png"
import userIcon from "../../../common/img/users_icon.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const Description = (props) => {
    return (
        <div className={style.wrap}>
            <div>
                <img  src={props.profile.photos.large != null ? props.profile.photos.large : userIcon}
                      className={style.avatar}/>
            </div>
            <div className={style.userDescription}>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <p><span>О себе: </span>{props.profile.aboutMe}</p>
                <span>Я в сети:</span><br/>
                <p><a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></p>
                <p><span>О работе: </span>{props.profile.lookingForAJobDescription}</p>
                <div className={style.work}>В посках работы:
                    <img src={props.profile.lookingForAJob ? yesIcon : noIcon}/>
                </div>
            </div>
        </div>
    )
}



export default Description;