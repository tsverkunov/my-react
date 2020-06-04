import React from "react";
import style from "./User.module.sass";
import usersIcon from "../../../common/img/users_icon.png";
import {NavLink} from "react-router-dom";


let User = ({followingInProgress, follow, unfollow, user}) => {
   return (
      <div className={style.user}>
         <div className={style.photo}>
            <NavLink to={'/profile/' + user.id}>
               <img alt="img"
                    src={user.photos.small != null
                       ? user.photos.small
                       : usersIcon}
               />
            </NavLink>
         </div>
         <div>
            {user.followed
               ? <button disabled={followingInProgress.some(id => id === user.id)}
                         onClick={() => {
                            unfollow(user.id)
                         }}
                         className={style.unSub}>
                  SUBSCRIBED
               </button>

               : <button disabled={followingInProgress.some(id => id === user.id)}
                         onClick={() => {
                            follow(user.id)
                         }}
                         className={style.sub}>
                  SUBSCRIBE
               </button>
            }
         </div>
         <div className={style.name}>
            {user.name}
         </div>
         <div>
            <span>Status:</span> {user.status}
         </div>
      </div>
   )
}

export default User;