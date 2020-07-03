import React, {useEffect} from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {requestFriends} from "../../../../redux/sideBarReducer";
import {compose} from "redux";
import PreloaderBull from "../../../../common/PreloaderBall/PreloaderBall";

const FriendsContainer = (props) => {

   useEffect(() => {
      props.requestFriends(props.currentPage, props.pageSize)
   }, [props.users, props.isAuth]);

   const isOwner = props.isAuth
   return (
      <div>
         {!props.isFetching
            ? <PreloaderBull/>
            : isOwner && <Friends {...props}/>
         }
      </div>
   )
}


const mapStateToProps = (state) => {
   return {
      friends: state.sideBarReducer.friends,
      users: state.usersReducer.users,
      isAuth: state.authReducer.isAuth,
      totalFriendsCount: state.sideBarReducer.totalFriendsCount,
      pageSize: state.sideBarReducer.pageSize,
      currentPage: state.sideBarReducer.currentPage,
      isFetching: state.sideBarReducer.isFetching
   }
}


export default compose(
   connect(mapStateToProps,
      {
         requestFriends
      })
)(FriendsContainer);