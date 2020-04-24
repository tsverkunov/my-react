import React from 'react';
import style from './Profile.module.sass';
import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';
import Avatar from "./Avatar/Avatar";

const Profile = (props) => {
    return (
        <div className={style.wrapperContent}>
            <Avatar/>
            <Description/>
            <MyPosts post={props.profilePage.post}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Profile;