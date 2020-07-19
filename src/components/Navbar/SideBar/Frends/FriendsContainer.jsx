import React, {useEffect} from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {requestFriends, setFriendsCurrentPage} from "../../../../redux/sideBarReducer";
import {compose} from "redux";

const FriendsContainer = ({
                             requestFriends,
                             currentPage,
                             pageSize,
                             users,
                             isAuth,
                             ...props
}) => {
   useEffect(() => {
      requestFriends(currentPage, pageSize)
   }, [users, isAuth, currentPage, pageSize, requestFriends]);

   return (
      isAuth && <Friends pageSize={pageSize} {...props}/>
      // <div>
      //    {props.isFetching
      //       ? <PreloaderBull/>
      //       : isAuth && <Friends pageSize={pageSize} {...props}/>
      //    }
      // </div>
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
         requestFriends,
         setFriendsCurrentPage
      })
)(FriendsContainer);