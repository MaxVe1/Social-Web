import { ActionType, dialogsPageDataType } from "./state";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

export const dialogsPageReducer = (state: dialogsPageDataType, action: ActionType): dialogsPageDataType => {

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