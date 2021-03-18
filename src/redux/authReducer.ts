import { AuthT, DialogsPageDataType } from "./entities";

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
        case "SET-USER-DATA": {
            return {
                ...state,
                data: { ...action.data },
                isAuth: true
            };
        }
        case SET_USER_PHOTO: {
            return { ...state, photoPath: action.photoPath};
        }
        default: {
            return state;
        }
    }
};

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