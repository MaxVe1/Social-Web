import {ActionType, profilePageDataType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postsData: [
        {id: 1, message: 'it is my first post', likes: 11},
        {id: 2, message: 'hi how are you', likes: 12}
    ],
    newPostText: 'it-kamasutra.com'
}


export const profilePageReducer = (state: profilePageDataType = initialState, action: ActionType): profilePageDataType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0
            };
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state};
            if (action.newText) {
                stateCopy.newPostText = action.newText;
            }
            return stateCopy;
        }
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