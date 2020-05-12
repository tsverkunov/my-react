import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users {...this.props} onPageChanged={this.onPageChanged}/>}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUserCount: state.usersReducer.totalUserCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSubscribe: (userId) => {
//             dispatch(onSubscribeAC(userId));
//         }
//     }
// }

export default connect(mapStateToProps,
    {follow, unfollow, toggleFollowingProgress, getUsers})(UsersContainer);
