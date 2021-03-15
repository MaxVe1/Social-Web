import { UsersPageDataType, UserType } from "./entities";

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
    isFetching: boolean
};

type ActionsType =
    | FollowACT
    | UnFollowACT
    | SetUsersACT
    | SetCurrentPageACT
    | SetTotalUsersCountACT
    | ToggleIsFetchingACT;

const initialState: UsersPageDataType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

const FOLLOW: "FOLLOW" = "FOLLOW";
const UNFOLLOW: "UNFOLLOW" = "UNFOLLOW";
const SET_USERS: "SET-USERS" = "SET-USERS";
const SET_CURRENT_PAGE: "SET-CURRENT-PAGE" = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT: "SET-TOTAL-USERS-COUNT" = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING: "TOGGLE-IS-FETCHING" = "TOGGLE-IS-FETCHING";

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
        default:
            return state;
    }
};

export const followAC = (userId: number): FollowACT => {
    return {
        type: FOLLOW,
        userId
    };
};
export const unfollowAC = (userId: number): UnFollowACT => {
    return {
        type: UNFOLLOW,
        userId
    };
};
export const setUsersAC = (users: Array<UserType>): SetUsersACT => {
    return {
        type: SET_USERS,
        users
    };
};
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACT => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
};
export const setUsersTotalCountAC = (totalUsersCount: number): SetTotalUsersCountACT => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    };
};
export const setIsFetchingAC = (isFetching: boolean): ToggleIsFetchingACT => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    };
};