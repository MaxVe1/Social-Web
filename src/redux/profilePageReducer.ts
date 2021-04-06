import {ProfilePageDataType, UserProfileItemT} from "./entities";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {profileAPI} from "../api/api";

type AddPostActionType = {
    type: typeof ADD_POST;
};
type UpdateNewPostActionType = {
    type: typeof UPDATE_NEW_POST_TEXT;
    newText: string;
};
type SetUserProfileT = {
    type: typeof SET_USER_PROFILE;
    profile: UserProfileItemT;
};

type SetStatusT = {
    type: typeof SET_STATUS
    status: string
}

type ActionsType = AddPostActionType | UpdateNewPostActionType | SetUserProfileT | SetStatusT;

type ProfilePageReducerThunkT<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>;

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

const initialState = {
    profile: {} as UserProfileItemT,
    postsData: [
        {id: 1, message: "Good day", likes: 15},
        {id: 2, message: "Nice weather", likes: 6},
        {id: 3, message: "I was in Rome!!!!", likes: 0}
    ],
    newPostText: "",
    defaultUserId: 2,
    status: ""
};

export const profilePageReducer = (
    state: ProfilePageDataType = initialState,
    action: ActionsType
): ProfilePageDataType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0
            };

            return {...state, postsData: [...state.postsData, newPost], newPostText: ""};
        }

        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {...state, status: action.status};
        default: {
            return state;
        }
    }
};

// * Action creators
export const addPost = (): AddPostActionType => {
    return {
        type: ADD_POST
    };
};
export const updateNewPost = (text: string): UpdateNewPostActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};
export const setUserProfile = (profile: UserProfileItemT): SetUserProfileT => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};
export const setStatus = (status: string): SetStatusT => {
    return {
        type: SET_STATUS,
        status
    };
};
// * //Action creators

// * Thunks
export const getUserProfile = (userId: number): ProfilePageReducerThunkT => dispatch => {
    profileAPI.getUserProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
}

export const getUserStatus = (userId: number): ProfilePageReducerThunkT => dispatch => {
    profileAPI.getStatus(userId).then((data) => {
        dispatch(setStatus(data));
    });
}

export const updateUserStatus = (status: string): ProfilePageReducerThunkT => dispatch => {
    profileAPI.updateStatus(status).then((data) => {
        if (data.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}


// * Thunks