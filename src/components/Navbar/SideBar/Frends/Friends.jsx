import React from 'react';
import style from './Friends.module.sass';
import FriendItem from "./FriendItem/FriendItem";
import usersIcon from "../../../../common/img/users_icon.png"
import arrowDown from "../../../../common/img/arrow_down.png"

const Friends = ({friends}) => {
   let FriendsItem = friends.map(f =>
      (<FriendItem ava={f.photos.small || usersIcon}
                   name={f.name}
                   id={f.id}
                   key={f.id}
      />));
   return (
      <div className={style.friends}>
         <div className={style.friendsItem}>
            {FriendsItem}
         </div>
         <div className={style.arrow}>
            <img src={arrowDown} alt=""/>
         </div>
      </div>
   )
}

export default Friends;