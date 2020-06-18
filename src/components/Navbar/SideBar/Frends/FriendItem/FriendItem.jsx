import React from 'react';
import style from './FriendItem.module.sass';
import {NavLink} from "react-router-dom";


const FriendItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <div className={style.ava}>
                <img alt="" src={props.ava}/>
            </div>
            <div className={style.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default FriendItem;