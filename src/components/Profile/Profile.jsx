import React from 'react';
import './Profile.sass';
import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';

const Profile = () => {
  return (
    <div className="profileWrapp">
      <div className="headerProfile">
        <img src="https://static.schools.by/images/header-bg/img-17.jpg"></img>
      </div>
      <div className="avatar">
        <img src="https://www.popsci.com/sites/popsci.com/files/import/2014/images/2014/09/Shark.jpg"></img>
      </div>
      <Description />
      <MyPosts />
    </div>
  )
}

export default Profile;