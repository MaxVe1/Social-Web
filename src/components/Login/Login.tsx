import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";

type formDataT = {
    login: string;
    password: string;
    rememberMe: boolean;
};

type MapStateToPropsT = ReturnType<typeof mapStateToProps>;

type LoginPropsType = MapStateToPropsT & {
    login: (email: string, password: string, rememberMe: boolean) => void;
};


const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: formDataT): void => {
        const { login: email, password, rememberMe } = formData;

        props.login(email, password, rememberMe);
    };

    if(props.isAuth) {
        return <Redirect to={`/profile/${props.id}`}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.data.id
    }
}

export default connect(mapStateToProps, {
    login
})(Login);