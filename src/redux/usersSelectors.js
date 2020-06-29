import {createSelector} from "reselect";

// example reselect start
const getUsersSelector = (state) => {
    return state.usersReducer.users
}
export const getUsers = createSelector(getUsersSelector,  // эта функция запускается повторно, только когда в зависимостях есть изменения.
    (users) => {
        return users.filter(u => true);
    }
)
// example reselect end

export const getPageSize = (state) => {
    return state.usersReducer.pageSize
}
export const getTotalUserCount = (state) => {
    return state.usersReducer.totalUserCount
}
export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage
}
export const getIsFetching = (state) => {
    return state.usersReducer.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersReducer.followingInProgress
}
export const getAuthorizedUserId = (state) => {
    return state.authReducer.id
}
