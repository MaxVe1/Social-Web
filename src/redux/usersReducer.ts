import {UsersPageDataType, UserType} from "./entities";

type FollowACType = {
    type: typeof FOLLOW;
    userId: number
};
type UnFollowACType = {
    type: typeof UNFOLLOW;
    userId: number
};

type SetUsersACT = {
    type: typeof SET_USERS,
    users: Array<UserType>
}

type SetCurrentPageACT = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}

type SetTotalUsersCountACT = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}


type ActionsType = FollowACType | UnFollowACType | SetUsersACT | SetCurrentPageACT | SetTotalUsersCountACT;

const initialState: UsersPageDataType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
};

const FOLLOW: "FOLLOW" = "FOLLOW";
const UNFOLLOW: "UNFOLLOW" = "UNFOLLOW";
const SET_USERS: "SET-USERS" = "SET-USERS";
const SET_CURRENT_PAGE: "SET-CURRENT-PAGE" = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT: "SET-TOTAL-USERS-COUNT" = "SET-TOTAL-USERS-COUNT";

export const usersReducer = (state: UsersPageDataType = initialState, action: ActionsType): UsersPageDataType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        default:
            return state;
    }
};

export const followAC = (userId: number): FollowACType => {
    return {
        type: FOLLOW,
        userId,
    };
};
export const unfollowAC = (userId: number): UnFollowACType => {
    return {
        type: UNFOLLOW,
        userId,
    };
};
export const setUsersAC = (users: Array<UserType>): SetUsersACT => {
    return {
        type: SET_USERS,
        users
    }

}
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACT => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }

}
export const setUsersTotalCountAC = (totalUsersCount: number): SetTotalUsersCountACT => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }

}