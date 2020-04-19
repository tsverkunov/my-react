import React from 'react';
import s from './Profile.module.sass';
import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';
import Avatar from "./Avatar/Avatar";

const Profile = () => {
    return (
        <div className={s.wrapperContent}>
            <Avatar/>
            <Description/>
            <MyPosts/>
        </div>
    )
}

export default Profile;