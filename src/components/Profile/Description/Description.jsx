import React, {useState} from 'react';
import style from './Description.module.sass';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileReduxForm from "./ProfileForm/ProfileReduxForm";
import ProfileData from "./ProfileData";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";

const Description = ({
                        profile, status, updateStatus,
                        updateDataProfile, isOwner, savePhoto,
                        friends, followingInProgress, follow, unfollow,
                        followed
                     }) => {
   let [editMode, setEditMode] = useState(true);

   const activateEditMode = () => {
      setEditMode(false);
   }
   const deActivateEditMode = (formData) => {
      updateDataProfile(formData)
         .then(() => {
            setEditMode(true);
         });
   }
   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   }
   return (
      <div className={style.wrap}>
         <ProfileAvatar onMainPhotoSelected={onMainPhotoSelected}
                        profile={profile}
                        isOwner={isOwner}
                        friends={friends}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                        followed={followed}

         />
         <div className={style.userDescription}>
            <p className={style.nikName}>{profile.fullName}</p>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
                                    isOwner={isOwner}
            />

            {editMode
               ? <ProfileData activateEditMode={activateEditMode}
                              profile={profile}
                              isOwner={isOwner}
               />
               // : <ProfileForm onSubmit={deActivateEditMode}/>
               : <ProfileReduxForm initialValues={profile}
                                   profile={profile}
                                   onSubmit={deActivateEditMode}
               />
            }
         </div>
      </div>
   )
}


export default Description;