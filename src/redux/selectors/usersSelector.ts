import {AppStateType} from "../reduxStore";

export const getUsers = (state: AppStateType) => state.usersPage.users;

export const getPageSize = (state: AppStateType) => state.usersPage.pageSize;

export const getTotalUsersCounte = (state: AppStateType) => state.usersPage.totalUsersCount;

export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching;

export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage;

export const getFollowingUsers = (state: AppStateType) => state.usersPage.followingUsers;