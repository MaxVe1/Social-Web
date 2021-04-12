import { Field, InjectedFormProps, reduxForm } from "redux-form";
import React from "react";

export type AddMessageFormT = {
    newMessageBody: string;
};

const AddMessageForm = (props: InjectedFormProps<AddMessageFormT>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message..."} />
            <button>Send</button>
        </form>
    );
};

export default reduxForm<AddMessageFormT>({
    form: "dialogAddMessageForm"
})(AddMessageForm);