import React from 'react';
import style from './Profile.module.sass';
import Description from './Description/Description';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../common/Preloader/Preloader";


const Profile = ({
                    profile, status,
                    updateStatus,
                    updateDataProfile,
                    isOwner, savePhoto,
                    friends, follow,
                    unfollow, followingInProgress,
                    followed
                 }) => {
   if (!profile) {
      return <Preloader/>
   }
   return (
      <div className={style.wrapperContent}>
         <Description savePhoto={savePhoto}
                      isOwner={isOwner}
                      profile={profile}
                      status={status}
                      updateStatus={updateStatus}
                      updateDataProfile={updateDataProfile}
                      friends={friends}
                      followingInProgress={followingInProgress}
                      follow={follow}
                      unfollow={unfollow}
                      followed={followed}
         />
         {isOwner && <MyPostsContainer/>}
      </div>
   )
}


export default Profile;