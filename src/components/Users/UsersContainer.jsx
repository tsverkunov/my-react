import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, requestUsers} from "../../redux/usersReducer";
import Users from "./Users";
import {compose} from "redux";
import {
   getCurrentPage,
   getFollowingInProgress,
   getIsFetching,
   getPageSize,
   getTotalUserCount,
   getUsers
} from "../../redux/usersSelectors";


class UsersContainer extends React.Component {
   componentDidMount() {
       const {currentPage, pageSize} = this.props;
      this.props.requestUsers(currentPage, pageSize);
   }

   onPageChanged = (pageNumber) => {
       const {pageSize} = this.props;
      this.props.requestUsers(pageNumber, pageSize);
   }

   render() {
      return <>
          <Users {...this.props}
                     onPageChanged={this.onPageChanged}/>
      </>
   }
}

const mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUserCount: getTotalUserCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSubscribe: (userId) => {
//             dispatch(onSubscribeAC(userId));
//         }
//     }
// }

export default compose(
   connect(mapStateToProps, {follow, unfollow, requestUsers}),
)(UsersContainer);