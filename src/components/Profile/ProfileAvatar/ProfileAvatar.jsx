import React, {useEffect, useState} from 'react';
import style from '../Description/Description.module.sass';
import userIcon from "../../../common/img/users_icon.png";
import plusIcon from "../../../common/img/plus_icon.png"
import minusIcon from "../../../common/img/minus_icon.png"
import Preloader from "../../../common/Preloader/Preloader";


const ProfileAvatar = ({
                          profile, isOwner,
                          onMainPhotoSelected, friends,
                          followingInProgress, follow, unfollow,
                          followed
                       }) => {
   let [editMode, setEditMode] = useState(true);
   // let friend = friends.find(f => f.id == profile.userId);
   let button;
   const toggleEditMode = () => {
      setEditMode(!editMode);
   }
   const offEditMode = (e) => {
      setEditMode(true);
      onMainPhotoSelected(e);
   }
   if (followed) {
      button = <button disabled={followingInProgress.some(id => id === profile.userId)}
                       className={style.unSub}
                       onClick={() => {
                          unfollow(profile.userId)
                       }}>SUBSCRIBED</button>
   } else {
      button = <button disabled={followingInProgress.some(id => id === profile.userId)}
                       className={style.sub}
                       onClick={() => {
                          follow(profile.userId)
                       }}>SUBSCRIBE</button>
   }

   return (
      <div className={style.avatarItem}>
         <img alt=''
              className={style.avatar}
              src={profile.photos.large || userIcon}
         />
         {!isOwner && button}
         {/*{!isOwner && <button disabled={followingInProgress.some(id => id === profile.userId)}*/}
         {/*        onClick={1 ? unfollow : follow}>*/}
         {/*   {1 ? "SUBSCRIBED" : "SUBSCRIBE"}*/}
         {/*</button>}*/}
         {
            isOwner && (editMode
               ? <img className={style.plusIcon}
                      src={plusIcon}
                      onClick={toggleEditMode}
                      alt=""
               />
               : <div className={style.minusIcon}>
                  <div>
                     <img className={style.plusIcon}
                          src={minusIcon}
                          onClick={toggleEditMode}
                          alt=""
                     />
                  </div>
                  <div>
                     <input type="file" onChange={offEditMode}/>
                  </div>
               </div>)
         }
      </div>
   )
}


export default ProfileAvatar;