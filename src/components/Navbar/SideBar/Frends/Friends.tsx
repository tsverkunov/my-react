import React, {FC, useState} from 'react'
import style from './Friends.module.sass'
import FriendItem from './FriendItem/FriendItem'
import usersIcon from '../../../../common/img/users_icon.png'
import {UserType} from '../../../../types/types'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

type PropsType = {
  friends: Array<UserType>
  totalFriendsCount: number
  pageSize: number
  setFriendsCurrentPage: (portionNumber: number) => void
}

export const Friends: FC<PropsType> = ({
                                  friends,
                                  totalFriendsCount,
                                  pageSize,
                                  setFriendsCurrentPage
                                }) => {

  let portionCount = Math.ceil(totalFriendsCount / pageSize)
  let [portionNumber, setPortionNumber] = useState(1)

  const FriendsItem = friends.map(f =>
    (<FriendItem ava={f.photos.small || usersIcon}
                 name={f.name}
                 id={f.id}
                 key={f.id}
    />))
  return (
    <div className={style.friends}>
      <div className={style.title}>
        <h3>Friends</h3>
      </div>
      {portionNumber > 1 &&
      <div className={style.arrowUp}>

        <ArrowUpwardIcon fontSize="large" onClick={() => {
          setPortionNumber(portionNumber - 1)
          setFriendsCurrentPage(portionNumber - 1)
        }}/>


        {/*<svg onClick={() => {*/}
        {/*  setPortionNumber(portionNumber - 1)*/}
        {/*  setFriendsCurrentPage(portionNumber - 1)*/}
        {/*}}*/}

        {/*     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">*/}
        {/*  <g>*/}
        {/*    <g>*/}
        {/*      <polygon points="128,48.907 0,176.907 30.187,207.093 128,109.28 225.813,207.093 256,176.907 		"/>*/}
        {/*    </g>*/}
        {/*  </g>*/}
        {/*</svg>*/}

        {/*<img alt=""*/}
        {/*     src={arrowUp}*/}
        {/*     onClick={() => {*/}
        {/*       setPortionNumber(portionNumber - 1);*/}
        {/*       setFriendsCurrentPage(portionNumber - 1);*/}
        {/*     }}/>*/}
      </div>}

      <div className={style.friendsItem}>
        {FriendsItem}
      </div>

      {portionCount > portionNumber &&
      <div className={style.arrowDown}>
        <ArrowDownwardIcon fontSize="large" onClick={() => {
          setPortionNumber(portionNumber + 1)
          setFriendsCurrentPage(portionNumber + 1)
        }}/>


        {/*<svg onClick={() => {*/}
        {/*  setPortionNumber(portionNumber + 1)*/}
        {/*  setFriendsCurrentPage(portionNumber + 1)*/}
        {/*}}*/}

        {/*     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">*/}
        {/*  <g>*/}
        {/*    <g>*/}
        {/*      <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		"/>*/}
        {/*    </g>*/}
        {/*  </g>*/}
        {/*</svg>*/}

        {/*<img alt=""*/}
        {/*     src={arrowDown}*/}
        {/*     onClick={() => {*/}
        {/*       setPortionNumber(portionNumber + 1);*/}
        {/*       setFriendsCurrentPage(portionNumber + 1);*/}
        {/*     }}/>*/}
      </div>}
    </div>
  )
}

