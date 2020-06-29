import React from "react";
import style from "./User.module.sass";
import usersIcon from "../../../common/img/users_icon.png";
import {NavLink} from "react-router-dom";


const User = ({
                 followingInProgress,
                 follow,
                 unfollow,
                 user,
                 isOwner
              }) => {
   return (
      <div className={style.user}>
         <div className={style.photo}>
            <NavLink to={'/profile/' + user.id}>
               <img alt=""
                    src={user.photos.small || usersIcon}
               />
            </NavLink>
         </div>
         <div>
            {user.followed
               ? isOwner && <button disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {unfollow(user.id)}}
                                    className={style.unSub}
            >
               SUBSCRIBED
            </button>
               : isOwner && <button disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {follow(user.id)}}
                                    className={style.sub}
            >
               SUBSCRIBE
            </button>
            }
         </div>
         <div className={style.name}>
            {user.name}
         </div>
         <div>
            {user.status}
         </div>
      </div>
   )
}

export default User;