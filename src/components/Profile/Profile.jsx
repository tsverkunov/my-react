import React from 'react';
import style from './Profile.module.sass';
import Description from './Description/Description';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../common/Preloader/Preloader";


const Profile = ({
                    profile, status, updateStatus, updateDataProfile,
                    isOwner, savePhoto, getAvatar
                 }) => {
   if (!profile) {
      return <Preloader/>
   }
   return (
      <div className={style.wrapperContent}>
         <Description savePhoto={savePhoto}
                      isOwner={isOwner}
                      getAvatar={getAvatar}
                      profile={profile}
                      status={status}
                      updateStatus={updateStatus}
                      updateDataProfile={updateDataProfile}
         />
         <MyPostsContainer/>
      </div>
   )
}


export default Profile;