import React from 'react'
import {connect} from 'react-redux'
import {follow, unfollow, requestUsers, FilterType} from '../../redux/usersReducer'
import Users from './Users'
import {compose} from 'redux'
import {
  getAuthorizedUserId,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUserCount,
  getUsers, getUsersFilter
} from '../../redux/usersSelectors'
import {UserType} from '../../types/types'
import {AppStateType} from '../../redux/redux-store'


type StatePropsType = {
  currentPage: number
  pageSize: number
  totalUserCount: number
  isFetching: boolean
  authorizedUserId: number | null
  users: Array<UserType>
  followingInProgress: Array<number>
  filter: FilterType
}
type StateDispatchType = {
  requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}
type OwnPropsType = {}

type PropsType = StatePropsType & StateDispatchType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    const {currentPage, pageSize, filter} = this.props
    this.props.requestUsers(currentPage, pageSize, filter)
  }

  onPageChanged = (pageNumber: number) => {
    const {pageSize, filter} = this.props
    this.props.requestUsers(pageNumber, pageSize, filter)
  }

  onFilterChanged = (filter: FilterType) => {
    const {pageSize} = this.props
    this.props.requestUsers(1, pageSize, filter)
  }

  render() {
    return <>
      <Users {...this.props}
             onPageChanged={this.onPageChanged}
             onFilterChanged={this.onFilterChanged}
             isOwner={this.props.authorizedUserId}
      />
    </>
  }
}

const mapStateToProps = (state: AppStateType): StatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    authorizedUserId: getAuthorizedUserId(state),
    filter: getUsersFilter(state)
  }
}

//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
export default compose(
  connect<StatePropsType, StateDispatchType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      requestUsers
    })
)(UsersContainer)