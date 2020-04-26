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
            <MyPosts state={props.state}
                     dispatch={props.dispatch} />
        </div>
    )
}


export default Profile;