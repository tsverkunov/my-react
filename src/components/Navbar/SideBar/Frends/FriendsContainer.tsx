import React, {FC, useEffect} from 'react'
import {Friends} from './Friends'
import {connect} from 'react-redux'
import {actions, requestFriends} from '../../../../redux/sideBarReducer'
import {compose} from 'redux'
import {AppStateType} from '../../../../redux/redux-store'
import {UserType} from '../../../../types/types'


// type StatePropsType = ReturnType<typeof mapStateToProps>

type StatePropsType = {
  totalFriendsCount: number;
  currentPage: number;
  pageSize: number;
  users: Array<UserType>;
  isAuth: any;
  friends: Array<UserType>;
}
type StateDispatchType = {
  requestFriends: (currentPage: number, pageSize: number) => void
  setFriendsCurrentPage: (portionNumber: number) => void
}
type OwnPropsType = {}

type PropsType = StatePropsType & StateDispatchType

const FriendsContainer: FC<PropsType> = ({
                                           totalFriendsCount,
                                           currentPage,
                                           pageSize,
                                           users,
                                           isAuth,
                                           friends,
                                           requestFriends,
                                           setFriendsCurrentPage
                                         }) => {
  useEffect(() => {
    requestFriends(currentPage, pageSize)
  }, [users, isAuth, currentPage, pageSize, requestFriends]);

  return (
    isAuth && <Friends pageSize={pageSize}
                       totalFriendsCount={totalFriendsCount}
                       friends={friends}
                       setFriendsCurrentPage={setFriendsCurrentPage}/>
    // <div>
    //    {props.isFetching
    //       ? <PreloaderBull/>
    //       : isAuth && <Friends pageSize={pageSize} {...props}/>
    //    }
    // </div>
  )
}


const mapStateToProps = (state: AppStateType) => {
  return {
    friends: state.sideBarReducer.friends,
    users: state.usersReducer.users,
    isAuth: state.authReducer.isAuth,
    totalFriendsCount: state.sideBarReducer.totalFriendsCount,
    pageSize: state.sideBarReducer.pageSize,
    currentPage: state.sideBarReducer.currentPage,
    // isFetching: state.sideBarReducer.isFetching
  }
}

export default compose(
  connect<StatePropsType, StateDispatchType, OwnPropsType, AppStateType>(mapStateToProps,
    {
      requestFriends,
      setFriendsCurrentPage: actions.setFriendsCurrentPage
    })
)(FriendsContainer)