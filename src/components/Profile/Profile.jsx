import React from 'react';
import style from './Profile.module.sass';
import Description from './Description/Description';
import Avatar from "./Avatar/Avatar";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={style.wrapperContent}>
            <Avatar/>
            <Description/>
            <MyPostsContainer  />
        </div>
    )
}


export default Profile;