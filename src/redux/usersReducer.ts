import { UsersPageDataType, UserType } from "./entities";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";
import { usersAPI } from "../api/api";

type FollowACT = {
    type: typeof FOLLOW;
    userId: number;
};
type UnFollowACT = {
    type: typeof UNFOLLOW;
    userId: number;
};
type SetUsersACT = {
    type: typeof SET_USERS;
    users: Array<UserType>;
};
type SetCurrentPageACT = {
    type: typeof SET_CURRENT_PAGE;
    currentPage: number;
};
type SetTotalUsersCountACT = {
    type: typeof SET_TOTAL_USERS_COUNT;
    totalUsersCount: number;
};
type ToggleIsFetchingACT = {
    type: typeof TOGGLE_IS_FETCHING;
    isFetching: boolean;
};
type ToggleIsFollowingProgressACT = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
    followingInProgress: boolean;
    userId: number;
};

type ActionsType =
    | FollowACT
    | UnFollowACT
    | SetUsersACT
    | SetCurrentPageACT
    | SetTotalUsersCountACT
    | ToggleIsFetchingACT
    | ToggleIsFollowingProgressACT;

type UserReducerThunkT<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>;

const initialState: UsersPageDataType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
    followingUsers: []
};

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

export const usersReducer = (state: UsersPageDataType = initialState, action: ActionsType): UsersPageDataType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: true } : u))
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: false } : u))
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingUsers: action.followingInProgress
                    ? [...state.followingUsers, action.userId]
                    : state.followingUsers.filter((id) => id !== action.userId)
            };
        default:
            return state;
    }
};

//* Action Creators
export const followSuccess = (userId: number): FollowACT => {
    return {
        type: FOLLOW,
        userId
    };
};
export const unfollowSuccess = (userId: number): UnFollowACT => {
    return {
        type: UNFOLLOW,
        userId
    };
};
export const setUsers = (users: Array<UserType>): SetUsersACT => {
    return {
        type: SET_USERS,
        users
    };
};
export const setCurrentPage = (currentPage: number): SetCurrentPageACT => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
};
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountACT => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    };
};
export const setIsFetching = (isFetching: boolean): ToggleIsFetchingACT => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    };
};
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number): ToggleIsFollowingProgressACT => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress,
        userId
    };
};
//* /Action Creators

// * Thunks
export const requestUsers = (currentPage: number, pageSize: number): UserReducerThunkT => (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
};
export const follow = (userId: number): UserReducerThunkT => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.followUser(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};
export const unfollow = (userId: number): UserReducerThunkT => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.unfollowUser(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};
// * /Thunks