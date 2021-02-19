import React, { ChangeEvent } from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsPageReducer";
import {StoreType} from "../../redux/reduxStore";
import { StoreContext } from "../../StoreContext";
import {Dialogs} from "./Dialogs";

/*type DialogsPropsType = {
    store: StoreType
};*/

export const DialogsContainer: React.FC = (props) => {


    return <StoreContext.Consumer>
        {
        (store) => {
            const {dialogsPageData} = store.getState();

            const onTextareaChangeHandler = (value: string) => {
                store.dispatch(updateNewMessageCreator(value));
            };
            const onSendBtnClick = () => store.dispatch(sendMessageCreator());

        return <Dialogs updateNewMessage={onTextareaChangeHandler}
            onSendBtnClick={onSendBtnClick}
            dialogsPageData={dialogsPageData}
        />}
    }
        </StoreContext.Consumer>

};
