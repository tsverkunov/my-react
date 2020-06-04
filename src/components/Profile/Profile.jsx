import React from 'react';
import style from './Profile.module.sass';
import Description from './Description/Description';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../common/Preloader/Preloader";


const Profile = ({profile, status, updateStatus}) => {
   if (!profile) {
      return <Preloader/>
   }
   console.log("profile")
   return (
      <div className={style.wrapperContent}>
         <Description profile={profile}
                      status={status}
                      updateStatus={updateStatus}
         />
         <MyPostsContainer/>
      </div>
   )
}


export default Profile;