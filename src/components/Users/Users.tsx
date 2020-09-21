import React, {FC, useEffect} from 'react'
import style from './Users.module.sass'
import Paginator from '../../common/Paginator/Paginator'
import Preloader from '../../common/Preloader/Preloader'
import {UserSearchForm} from './UsersSearchForm'
import {FilterType, follow, requestUsers, unfollow} from '../../redux/usersReducer'
import {useDispatch, useSelector} from 'react-redux'
import {
  getAuthorizedUserId,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUserCount,
  getUsers,
  getUsersFilter
} from '../../redux/usersSelectors'
import {User} from './User/User'

type PropsType = {}

export const Users: FC<PropsType> = React.memo(() => {

  const users = useSelector(getUsers)
  const totalUserCount = useSelector(getTotalUserCount)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getUsersFilter)
  const isOwner = useSelector(getAuthorizedUserId)
  const isFetching = useSelector(getIsFetching)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter))
    // eslint-disable-next-line
  }, [])

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter))
  }
  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter))
  }
  const followUsers = (userId: number) => {
    dispatch(follow(userId))
  }
  const unfollowUsers = (userId: number) => {
    dispatch(unfollow(userId))
  }

  return (
    <div className={style.wrapper}>
      <div>
        <UserSearchForm onFilterChanged={onFilterChanged}/>
      </div>
      <Paginator totalItemsCount={totalUserCount}
                 pageSize={pageSize}
                 currentPage={currentPage}
                 onPageChanged={onPageChanged}
      />
      {isFetching
        ? <Preloader/>
        : <div className={style.wrapperContent}>
          {users.map(u =>
            <User followingInProgress={followingInProgress}
                  follow={followUsers}
                  unfollow={unfollowUsers}
                  isOwner={isOwner}
                  user={u}
                  key={u.id}
            />
          )}
        </div>}
    </div>
  )
})
