import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    toggleFollowingProgress
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount / 100);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
            usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users {...this.props}
                         onPageChanged={this.onPageChanged}
                         // totalUserCount={this.props.totalUserCount}
                         // pageSize={this.props.pageSize}
                         // users={this.props.users}
                         // currentPage={this.props.currentPage}
                         // follow={this.props.follow}
                         // unfollow={this.props.unfollow}
                         // followingInProgress={this.props.followingInProgress}
                         // toggleFollowingProgress={this.props.toggleFollowingProgress}
                    />}
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
//         },
//         onUnSubscribe: (userId) => {
//             dispatch(onUnSubscribeAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUserCount: (totalCount) => {
//             dispatch(setTotalUserCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage,
        setTotalUserCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);
