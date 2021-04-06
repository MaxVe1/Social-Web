import { AuthT, DialogsPageDataType } from "./entities";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";
import {profileAPI, usersAPI} from "../api/api";

export type SetAuthUserDataAT = {
    type: typeof SET_USER_DATA;
    data: UserDataT;
};
export type SetUserPhotoAT = {
    type: typeof SET_USER_PHOTO;
    photoPath: string;
};

type UserDataT = {
    id: number | null;
    login: string;
    email: string;
};

const SET_USER_DATA = "SET-USER-DATA";
const SET_USER_PHOTO = "SET-USER-PHOTO";

type ActionsType = SetAuthUserDataAT | SetUserPhotoAT;

type authReducerThunkT<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>;

export type InitialStateType = {
    data: UserDataT;
    isAuth: boolean;
    photoPath: string | null;
};

const initialState: InitialStateType = {
    data: {
        id: null,
        login: "",
        email: ""
    },
    isAuth: false,
    photoPath: ""
};

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                data: { ...action.data },
                isAuth: true
            };
        }
        case SET_USER_PHOTO: {
            return { ...state, photoPath: action.photoPath };
        }
        default: {
            return state;
        }
    }
};

// * Actions
export const setAuthUserData = (id: number, email: string, login: string): SetAuthUserDataAT => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login
        }
    };
};
export const setUserPhoto = (photoPath: string): SetUserPhotoAT => {
    return {
        type: SET_USER_PHOTO,
        photoPath
    };
};
// * /Actions

// * Thunks
export const getAuthUserData = (): authReducerThunkT => (dispatch) => {
    usersAPI
        .authorization()
        .then((data) => {
            if (data.resultCode === 0) {
                const { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login));
                return id;
            }
        })
        .then((id) => {
            profileAPI.getUserProfile(id).then((data) => {
                dispatch(setUserPhoto(data.photos.large));
            });
        });
};
// * /Thunks