import React, {useState} from 'react';
import style from '../Description/Description.module.sass';
import userIcon from "../../../common/img/users_icon.png";
import plusIcon from "../../../common/img/plus_icon.png"
import minusIcon from "../../../common/img/minus_icon.png"


const ProfileAvatar = ({
                          profile, isOwner,
                          onMainPhotoSelected
                       }) => {
   let [editMode, setEditMode] = useState(true);

   const toggleEditMode = () => {
      setEditMode(!editMode);
   }
   const offEditMode = (e) => {
      setEditMode(true);
      onMainPhotoSelected(e);
   }
   return (
      <div className={style.avatarItem}>
         <img alt=''
              className={style.avatar}
              src={profile.photos.large || userIcon}
         />
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