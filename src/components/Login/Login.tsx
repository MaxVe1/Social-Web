import React from "react";
import LoginForm from "./LoginForm";

 const Login = () => {
    const onSubmit = (formData: Object):void => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};
export default Login;
