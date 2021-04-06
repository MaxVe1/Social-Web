import { DialogsPageDataType } from "./entities";

type SendMessageActionType = {
    type: typeof SEND_MESSAGE;
};
type UpdateNewMessageActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT;
    newText: string;
};
type ActionsType = SendMessageActionType | UpdateNewMessageActionType;

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
        {
            id: 1,
            name: "Dimych",
            logo:
                "https://c0.klipartz.com/pngpicture/795/938/gratis-png-cerdo-blanco-grande-caras-divertidas-de-dibujos-animados-s.png"
        },
        {
            id: 2,
            name: "Andrei",
            logo:
                "https://e7.pngegg.com/pngimages/95/869/png-clipart-walrus-santa-claus-drawing-funny-cartoon-faces-s-food-face.png"
        },
        {
            id: 3,
            name: "Sveta",
            logo:
                "https://w7.pngwing.com/pngs/2/519/png-transparent-little-penguin-bird-face-funny-cartoon-faces-s-face-smiley-bird.png"
        },
        {
            id: 4,
            name: "Viktor",
            logo: "https://wallpaperaccess.com/full/777162.png"
        },
        {
            id: 5,
            name: "Valera",
            logo: "https://funnypicture.org/wallpaper/2015/05/funny-cartoon-faces-28-high-resolution-wallpaper.png"
        }
    ],
    newMessageText: ""

    };

export const dialogsPageReducer = (
    state: DialogsPageDataType = initialState,
    action: ActionsType
): DialogsPageDataType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            const stateCopy = { ...state };

            if (action.newText) {
                stateCopy.newMessageText = action.newText;
            }

            return stateCopy;
        }
        case SEND_MESSAGE: {
            const newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText
            };

            return { ...state, messagesData: [...state.messagesData, newMessage], newMessageText: "" };
        }

        default: {
            return state;
        }
    }
};

export const sendMessage = (): SendMessageActionType => {
    return {
        type: SEND_MESSAGE
    };
};
export const updateNewMessage = (messageText: string): UpdateNewMessageActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: messageText
    };
};