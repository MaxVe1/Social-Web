import React from "react";
import { WrappedFieldProps } from "redux-form";
import s from "./FormsControls.module.scss"
;
const FormControl: React.FC<WrappedFieldProps> = (props) => {
    const {touched, error} = props.meta;
    const isError = touched && error;

    return (
        <div className={`${s.formControl}  ${isError && s.error}`}>
            {props.children}
            <div>{isError && <span>{error}</span>}</div>
        </div>
    );
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};