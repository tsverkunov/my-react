import React, {useState} from 'react';
import style from '../Description/Description.module.sass';
import userIcon from "../../../common/img/users_icon.png";
import plusIcon from "../../../common/img/plus_icon.png"
import minusIcon from "../../../common/img/minus_icon.png"


const ProfileAvatar = ({
                          profile, isOwner,
                          onMainPhotoSelected,
                          followingInProgress,
                          follow, unfollow, followed
                       }) => {
   let [editMode, setEditMode] = useState(true);
   let [editDisplay, setEditDisplay] = useState('none');

   const editDisplayBlock = () => {
      setEditDisplay('block');
   }
   const editDisplayNone = () => {
      setEditDisplay('none');
   }


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
              onMouseEnter={editDisplayBlock}
              onMouseLeave={editDisplayNone}
              onDoubleClick={toggleEditMode}
              src={profile.photos.large || userIcon}
         />
         {!isOwner && button}
         {/*{!isOwner && <button disabled={followingInProgress.some(id => id === profile.userId)}*/}
         {/*        onClick={1 ? unfollow : follow}>*/}
         {/*   {1 ? "SUBSCRIBED" : "SUBSCRIBE"}*/}
         {/*</button>}*/}
         {
            isOwner && (editMode
               ? <div className={style.wrappIcon} style={{display: editDisplay}}>
                  <img className={style.plusIcon}
                       src={plusIcon}
                       onClick={toggleEditMode}
                       onMouseEnter={editDisplayBlock}
                       alt=""
                  />
               </div>
               : <div className={style.minusIcon}>
                  <div className={style.wrappIcon} style={{display: editDisplay}}>
                     <img className={style.plusIcon}
                          src={minusIcon}
                          onClick={toggleEditMode}
                          onMouseEnter={editDisplayBlock}
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