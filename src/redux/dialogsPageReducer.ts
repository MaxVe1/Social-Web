import { ActionType, dialogsPageDataType } from "./state";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How it-kams'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'You are welcome'}
        ],
        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrei'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        newMessageText: ''
    };

export const dialogsPageReducer = (state: dialogsPageDataType=initialState, action: ActionType): dialogsPageDataType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.newText) {
                state.newMessageText = action.newText;
            }
            return state;
        case SEND_MESSAGE:
            const newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText
            };

            state.messagesData.push(newMessage);
            state.newMessageText = "";
            return state;
        default:
            return state;
    }

};

export const sendMessageCreator = (): ActionType => {
    return {
        type: SEND_MESSAGE
    };
};
export const updateNewMessageCreator = (messageText: string): ActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: messageText
    };
};