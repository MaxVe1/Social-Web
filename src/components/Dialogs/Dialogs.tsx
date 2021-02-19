import React,{ChangeEvent} from 'react';
import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import {dialogsPageDataType} from "../../redux/entities"

type DialogsPropsType = {
    updateNewMessage: (value: string) => void
    onSendBtnClick: () => void
    dialogsPageData: dialogsPageDataType
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {dialogsData, messagesData, newMessageText} = props.dialogsPageData;

    const onTextareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.currentTarget;
        props.updateNewMessage(value)
    };
    const onSendBtnClick = () => props.onSendBtnClick();

    return (
        <div className={classes.dialog}>
            <div className={classes.dialogItems}>
                {dialogsData.map((dialog) => (
                    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
                ))}
            </div>

            <div className={classes.messages}>
                {messagesData.map((message) => (
                    <Message key={message.id} message={message.message} />
                ))}
            </div>

            <div>
                <textarea
                    onChange={onTextareaChangeHandler}
                    value={newMessageText}
                    placeholder={"Enter your message..."}
                />
                <button onPointerDown={onSendBtnClick}>Send</button>
            </div>
        </div>
    );
};

