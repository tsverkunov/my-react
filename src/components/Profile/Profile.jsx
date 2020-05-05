import React from 'react';
import style from './Profile.module.sass';
import Description from './Description/Description';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../common/preloader/Preloader";


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.wrapperContent}>
            <Description profile={props.profile}/>
            <MyPostsContainer  />
        </div>
    )
}


export default Profile;