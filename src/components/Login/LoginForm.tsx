import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type FormDataT = {
    login: string,
    password: string,
    rememberMe: boolean
}


const LoginForm = (props: InjectedFormProps<FormDataT>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={"text"} placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field type={"text"} placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default reduxForm<FormDataT>({
    form: 'login',
})(LoginForm)