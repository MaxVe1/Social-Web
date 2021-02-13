import {ActionType, profilePageDataType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profilePageReducer = (state: profilePageDataType, action: ActionType): profilePageDataType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            if (action.newText) {
                state.newPostText = action.newText;
            }
            return state;
        default:
            return state;

    }

};

export const addPostCreator = (): ActionType => {
    return {
        type: ADD_POST
    };
};
export const updateNewPostCreator = (text: string): ActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};