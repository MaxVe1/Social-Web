import React from 'react';

import { Message } from './Message/Message';
import { DialogItem } from './DialogItem/DialogItem';

import classes from './Dialogs.module.css';
import { DialogItemType, MessageDataType } from '../../redux/state';

type DialogsPropsType = {
  dialogsData: Array<DialogItemType>
  messagesData: Array<MessageDataType>
}

export const Dialogs = (props: DialogsPropsType) => {

  return (
    <div className={classes.dialog}>
      <div className={classes.dialogItems}>

        {props.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)}

      </div>

      <div className={classes.messages}>

        {props.messagesData.map(message => <Message key={message.id} message={message.message} />)}

      </div>

    </div>
  );
};

