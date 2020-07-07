import React from 'react';
import style from './SideBar.module.sass';
import FriendsContainer from "./Frends/FriendsContainer";


const SideBar = (props) => {
    return (
        <div className={style.sideBar}>
            <FriendsContainer />
        </div>
    )
}

export default SideBar;