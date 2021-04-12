import React from "react";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import { DialogsPageDataType } from "../../redux/entities";
import AddMessageForm, { AddMessageFormT } from "./AddMessageForm";

type DialogsPropsType = {
    updateNewMessage: (value: string) => void;
    sendMessage: (value: string) => void;
    dialogsPageData: DialogsPageDataType;
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const { dialogsData, messagesData } = props.dialogsPageData;

    const addNewMessage = (values: AddMessageFormT) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={classes.dialog}>
            <div className={classes.dialogItems}>
                {dialogsData.map((dialog) => (
                    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} logo={dialog.logo} />
                ))}
            </div>

            <div className={classes.messages}>
                {messagesData.map((message) => (
                    <Message key={message.id} message={message.message} />
                ))}
            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    );
};


