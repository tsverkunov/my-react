import React from 'react';
import style from './Navbar.module.sass';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.active}>My Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/setting" activeClassName={style.active}>Settings</NavLink>
            </div>
            <SideBar />
        </nav>
    )
}

export default Navbar;