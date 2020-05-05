import React from 'react';
import style from './Description.module.sass';
import Preloader from "../../../common/preloader/Preloader";
import yesIcon from "../../../common/img/yes.png"
import noIcon from "../../../common/img/no.png"
import {NavLink} from "react-router-dom";

const Description = (props) => {

    return (
        <div className={style.wrap}>
            <div>
                <img className={style.avatar} src={props.profile.photos.large}/>
            </div>
            <div className={style.userDescription}>
                <h2>{props.profile.fullName}</h2>
                <p><span>О себе: </span>{props.profile.aboutMe}</p>
                <span>Я в сети: &#8195;</span>
                <NavLink to={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</NavLink>&#8195;
                <NavLink to={props.profile.contacts.vk}>{props.profile.contacts.vk}</NavLink>&#8195;
                <NavLink to={props.profile.contacts.github}>{props.profile.contacts.github}</NavLink>
                <p><span>О работе: </span>{props.profile.lookingForAJobDescription}</p>
                <div className={style.work}>В посках работы:<img src={props.profile.lookingForAJob ? yesIcon : noIcon}/></div>
            </div>
        </div>

    )
}

export default Description;