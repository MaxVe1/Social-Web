
import React, { ChangeEvent } from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsPageReducer";
import {StoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
};

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    const {dialogsPageData} = props.store.getState();

    const onTextareaChangeHandler = (value: string) => {
        props.store.dispatch(updateNewMessageCreator(value));
    };
    const onSendBtnClick = () => props.store.dispatch(sendMessageCreator());

    return (
        <Dialogs
            updateNewMessage={onTextareaChangeHandler}
            onSendBtnClick={onSendBtnClick}
            dialogsPageData={dialogsPageData}
        />
    );
};
