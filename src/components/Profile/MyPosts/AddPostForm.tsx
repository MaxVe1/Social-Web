import React from "react";
import s from "./MyPosts.module.css";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

export type AddPostFormT = {
    addPostBody: string
}

const AddPostForm = (props: InjectedFormProps<AddPostFormT>) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postEdit}>
            <Field component={"textarea"} name={"addPostBody"} placeholder={"Enter text..."} />
            <button>Add Post</button>
        </form>
    );
};

export default reduxForm<AddPostFormT>({
    form: "postTextForm"
})(AddPostForm)