import React from 'react';
import style from './Header.module.sass';
import logo from '../../common/img/EXAH-business-black.svg'
import {NavLink} from "react-router-dom";
import userIcon from "../../common/img/users_icon.png"
import PreloaderBall from "../../common/preloaderBall/PreloaderBall";


const Header = (props) => {
    // if (!props.currentAva) {
    //     return <PreloaderBall/>
    // }

    let userPhoto = props.currentAva.small
    return (
        <header className={style.header}>
            <img src={logo}></img>
            <div className={style.loginItem}>
                {props.isAuth ?
                    <div className={style.ava}>
                        <span>{props.login}</span>
                        <img src={userPhoto != null ? userPhoto : userIcon}/>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;