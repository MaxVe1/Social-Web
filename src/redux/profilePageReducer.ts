import { ProfilePageDataType, UserProfileItemT } from "./entities";

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

type ActionsType = AddPostActionType | UpdateNewPostActionType | SetUserProfileT;

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";


const initialState = {
    profile: {} as UserProfileItemT,
    postsData: [
        {id: 1, message: 'it is my first post', likes: 11},
        {id: 2, message: 'hi how are you', likes: 12}
    ],
    newPostText: "it-kamasutra.com",
    defaultUserId: 2
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

            return { ...state, postsData: [...state.postsData, newPost], newPostText: "" };
        }

        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default: {
            return state;
        }
    }
};

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