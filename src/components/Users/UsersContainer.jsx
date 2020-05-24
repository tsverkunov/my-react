import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, requestUsers} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
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
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users {...this.props} onPageChanged={this.onPageChanged}/>}
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
    // withAuthRedirect
)(UsersContainer);