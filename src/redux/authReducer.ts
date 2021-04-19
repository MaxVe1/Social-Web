import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./reduxStore";
import {authApi, profileAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";

export type SetAuthUserDataAT = {
    type: typeof SET_USER_DATA;
    payload: UserDataT;
    isAuth: boolean
};
export type SetUserPhotoAT = {
    type: typeof SET_USER_PHOTO;
    photoPath: string;
};

type UserDataT = {
    id: number | null;
    login: string | null;
    email: string | null;
};

const SET_USER_DATA = "SET-USER-DATA";
const SET_USER_PHOTO = "SET-USER-PHOTO";

type ActionsType = SetAuthUserDataAT | SetUserPhotoAT;

type authReducerThunkT<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType | FormAction>;

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
                data: { ...action.payload },
                isAuth: action.isAuth
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
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataAT => {
    return {
        type: SET_USER_DATA,
        isAuth,
        payload: {
            id,
            email,
            login,
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
export const getAuthUserData = (): authReducerThunkT<Promise<any>> => (dispatch) => {
    return authApi
        .authorization()
        .then((data) => {
            if (data.resultCode === 0) {
                const { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login, true));
                return id;
            }
        })
        .then((id) => {
            profileAPI.getUserProfile(id).then((data) => {
                data && dispatch(setUserPhoto(data.photos.large));
            });

        })
};

export const login = (email: string, password: string, rememberMe: boolean): authReducerThunkT => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                const errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: errorMessage}))
            }
        })
        .catch(error => console.error(error))

};


export const logout = (): authReducerThunkT => (dispatch) => {
    authApi.logout()
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })

};

// * /Thunks