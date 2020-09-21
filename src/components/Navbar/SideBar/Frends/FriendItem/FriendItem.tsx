import React, {FC} from 'react';
import style from './FriendItem.module.sass';
import {NavLink} from "react-router-dom";

type PropsType = {
  id: number
  ava: string
  name: string
}
const FriendItem: FC<PropsType> = (props) => {
    let path = "/profile/" + props.id
    return (
        <div>
            <div className={style.ava}>
              <NavLink to={path}><img alt="" src={props.ava}/></NavLink>
            </div>
            <div className={style.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default FriendItem;