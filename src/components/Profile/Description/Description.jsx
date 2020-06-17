import React, {useState} from 'react';
import style from './Description.module.sass';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileForm from "./ProfileForm/ProfileForm";
import ProfileReduxForm from "./ProfileForm/Profile-Form";
import ProfileData from "./ProfileData";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";

const Description = ({
                        profile, status, updateStatus,
                        updateDataProfile, isOwner, savePhoto,
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
                        isOwner={isOwner}/>
         <div className={style.userDescription}>
            <h2>{profile.fullName}</h2>
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