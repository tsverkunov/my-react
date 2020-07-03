import React, {useEffect} from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {requestFriends} from "../../../../redux/sideBarReducer";
import {compose} from "redux";

const FriendsContainer = (props) => {

   useEffect(() => {
      props.requestFriends()
   }, [props.users]);

   return (
      <Friends {...props}/>
   )
}


const mapStateToProps = (state) => {
   return {
      friends: state.sideBarReducer.friends,
      users: state.usersReducer.users
   }
}


export default compose(
   connect(mapStateToProps,
      {
         requestFriends
      })
)(FriendsContainer);