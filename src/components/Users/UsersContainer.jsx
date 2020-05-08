import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "ece8ec33-8cc4-4d7e-9ea7-23ed4606e36c"
                }
            })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount / 100);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "ece8ec33-8cc4-4d7e-9ea7-23ed4606e36c"
                }
            })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);

            });
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users totalUserCount={this.props.totalUserCount}
                         pageSize={this.props.pageSize}
                         users={this.props.users}
                         currentPage={this.props.currentPage}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         onPageChanged={this.onPageChanged}/>}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUserCount: state.usersReducer.totalUserCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
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
        setTotalUserCount, toggleIsFetching})(UsersContainer);
