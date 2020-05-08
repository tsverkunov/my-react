import React from 'react';
import style from './SideBar.module.sass';
import FriendsContainer from "./Frends/FriendsContainer";


const SideBar = (props) => {
    return (
        <div className={style.sideBar}>
            <div className={style.title}>
                <h3>Friends</h3>
            </div>
            <FriendsContainer />
        </div>
    )
}

export default SideBar;