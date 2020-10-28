import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

// example reselect start
const getUsersSelector = (state: AppStateType) => {
    return state.usersReducer.users
}
export const getUsers = createSelector(getUsersSelector,  // эта функция запускается повторно, только когда в зависимостях есть изменения.
    (users) => {
        return users.filter(u => true);
    }
)
// example reselect end

export const getPageSize = (state: AppStateType) => {
    return state.usersReducer.pageSize
}
export const getTotalUserCount = (state: AppStateType) => {
    return state.usersReducer.totalUserCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersReducer.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersReducer.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersReducer.followingInProgress
}
export const getAuthorizedUserId = (state: AppStateType) => {
    return state.authReducer.userId
}
export const getPosts = (state: AppStateType) => {
    return state.profileReducer.posts
}
export const getUsersFilter = (state: AppStateType) => {
    return state.usersReducer.filter
}
