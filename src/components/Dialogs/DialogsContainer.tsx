import React from "react";
import { sendMessage } from "../../redux/dialogsPageReducer";
import { AppStateType } from "../../redux/reduxStore";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { DialogsPageDataType } from "../../redux/entities";
import { AuthRedirect } from "../HOC/AuthRedirect";
import { compose } from "redux";

type MapStatePropsType = {
    dialogsPageData: DialogsPageDataType;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPageData: state.dialogsPageData
    };
};

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        sendMessage
    }),
    AuthRedirect
)(Dialogs);
