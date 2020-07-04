import React from 'react';
import style from './Header.module.sass';
import logo from '../../common/img/Social_Network_logo.svg'
import {NavLink} from "react-router-dom";
import userIcon from "../../common/img/users_icon.png"

const Header = ({avatar, login, logout, isAuth}) => {
   return (
      <header className={style.header}>
         <img alt="" src={logo}/>
         <div className={style.loginItem}>
            {isAuth
               ? <div className={style.ava}>
                  <NavLink to="/profile" >{login}</NavLink>
                  <img alt="" src={avatar || userIcon}/>
                  {/*<NavLink to={'/login'} onClick={props.logout}>Log Out</NavLink>*/}
                  <button onClick={logout} className={style.signIn}>Log Out</button>
               </div>
               : <div className={style.signIn}>
                  <NavLink to={'/login'} >Sign In</NavLink>
               </div>
            }
         </div>
      </header>
   )
}

export default Header;