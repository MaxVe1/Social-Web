import React from "react";
import { sendMessage, updateNewMessage } from "../../redux/dialogsPageReducer";
import { AppStateType } from "../../redux/reduxStore";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { DialogsPageDataType } from "../../redux/entities";
import { AuthRedirect } from "../HOC/AuthRedirect";

type MapStatePropsType = {
    dialogsPageData: DialogsPageDataType;
   // isAuth: boolean;
};

type MapDispatchPropsType = {
    updateNewMessage: (value: string) => void;
    sendMessage: () => void;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPageData: state.dialogsPageData//,
        //isAuth: state.auth.isAuth
    };
};

// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    updateNewMessage,
    sendMessage
})(AuthRedirect(Dialogs));
