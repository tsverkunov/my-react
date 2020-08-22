import React, {FC, useState} from 'react';
import style from './Friends.module.sass';
import FriendItem from "./FriendItem/FriendItem";
import usersIcon from "../../../../common/img/users_icon.png"
import arrowDown from "../../../../common/img/arrow_down.png"
import arrowUp from "../../../../common/img/arrow_up.png"
import {UserType} from "../../../../types/types";


type PropsType = {
  friends: Array<UserType>
  totalFriendsCount: number
  pageSize: number
  setFriendsCurrentPage: (portionNumber: number) => void
}

const Friends: FC<PropsType> = ({
                   friends,
                   totalFriendsCount,
                   pageSize,
                   setFriendsCurrentPage
                 }) => {

  let portionCount = Math.ceil(totalFriendsCount / pageSize);
  let [portionNumber, setPortionNumber] = useState(1);

  const FriendsItem = friends.map(f =>
    (<FriendItem ava={f.photos.small || usersIcon}
                 name={f.name}
                 id={f.id}
                 key={f.id}
    />));
  return (
    <div className={style.friends}>
      <div className={style.title}>
        <h3>Friends</h3>
      </div>
      {portionNumber > 1 &&
      <div className={style.arrow}>
        <img alt=""
             src={arrowUp}
             onClick={() => {
               setPortionNumber(portionNumber - 1);
               setFriendsCurrentPage(portionNumber - 1);
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
               setFriendsCurrentPage(portionNumber + 1);
             }}/>
      </div>}

    </div>
  )
}

export default Friends;

