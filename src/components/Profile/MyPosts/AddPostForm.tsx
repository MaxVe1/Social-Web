import React from "react";
import s from "./MyPosts.module.css";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { maxLengthValidator, requiredField } from "../../../utils/validator/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

export type AddPostFormT = {
    addPostBody: string;
};

const maxLengthValidation = maxLengthValidator(150);

const AddPostForm = (props: InjectedFormProps<AddPostFormT>) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postEdit}>
            <Field
                component={TextArea}
                name={"addPostBody"}
                placeholder={"Enter text..."}
                validate={[requiredField, maxLengthValidation]}
            />
            <button>Add Post</button>
        </form>
    );
};

export default reduxForm<AddPostFormT>({
    form: "postTextForm"
})(AddPostForm);