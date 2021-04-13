import { Field, InjectedFormProps, reduxForm } from "redux-form";
import React from "react";
import { TextArea } from "../common/FormsControls/FormsControls";
import { maxLengthValidator, requiredField } from "../../utils/validator/validators";

export type AddMessageFormT = {
    newMessageBody: string;
};

const maxLength = maxLengthValidator(100);

const AddMessageForm = (props: InjectedFormProps<AddMessageFormT>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={TextArea}
                validate={[requiredField, maxLength]}
                name={"newMessageBody"}
                placeholder={"Enter your message..."}
            />
            <button>Send</button>
        </form>
    );
};

export default reduxForm<AddMessageFormT>({
    form: "dialogAddMessageForm"
})(AddMessageForm);