import React, {useEffect, useState} from 'react';
import style from './Friends.module.sass';
import FriendItem from "./FriendItem/FriendItem";
import usersIcon from "../../../../common/img/users_icon.png"
import arrowDown from "../../../../common/img/arrow_down.png"
import arrowUp from "../../../../common/img/arrow_up.png"


const Friends = ({friends, totalFriendsCount, pageSize, requestFriends, ...props}) => {

   let portionCount = Math.ceil(totalFriendsCount / pageSize);
   let [portionNumber, setPortionNumber] = useState(1);
   let [currentPage, setCurrentPage] = useState(1);

   useEffect(() =>{
      requestFriends(currentPage, pageSize)
   },[currentPage])

   const FriendsItem = friends.map(f =>
      (<FriendItem ava={f.photos.small || usersIcon}
                   name={f.name}
                   id={f.id}
                   key={f.id}
      />));

   return (
      <div className={style.friends}>

         {portionNumber > 1 &&
         <div className={style.arrow}>
            <img alt=""
                 src={arrowUp}
                 onClick={() => {
                    setPortionNumber(portionNumber - 1);
                    setCurrentPage (currentPage - 1);
                 }}/>
         </div>}

         <div className={style.friendsItem}>
            {FriendsItem}
         </div>

         {portionCount > portionNumber &&
         <div className={style.arrow}>
            <img alt=""
                 src={arrowDown}
                 onClick={() => {
                    setPortionNumber(portionNumber + 1);
                    setCurrentPage (currentPage + 1);
                 }}/>
         </div>}

      </div>
   )
}

export default Friends;