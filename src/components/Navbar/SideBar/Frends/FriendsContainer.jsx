import React, {useEffect} from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {requestFriends} from "../../../../redux/sideBarReducer";
import {compose} from "redux";

const FriendsContainer = (props) => {

   useEffect(() => {
      props.requestFriends( props.currentPage, props.pageSize)
   }, [props.users, props.isAuth]);

   const isOwner = props.isAuth
   return (
      isOwner && <Friends {...props}/>
   )
}


const mapStateToProps = (state) => {
   return {
      friends: state.sideBarReducer.friends,
      users: state.usersReducer.users,
      isAuth: state.authReducer.isAuth,
      totalFriendsCount: state.sideBarReducer.totalFriendsCount,
      pageSize: state.sideBarReducer.pageSize,
      currentPage: state.sideBarReducer.currentPage
   }
}


export default compose(
   connect(mapStateToProps,
      {
         requestFriends
      })
)(FriendsContainer);