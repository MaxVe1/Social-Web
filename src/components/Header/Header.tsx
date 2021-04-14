import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsT = {
    isAuth: boolean;
    login: string | null;
    photoPath: string | null;
    logout: () => void;
};

const Header = (props: HeaderPropsT) => {
    return (
        <header className={s.header}>
            <img
                src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                alt="Logo"
            />
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <LoginUserPanel login={props.login} logout={props.logout}/>
                        : <NavLink to={"/login"}>Login</NavLink>
                }
                {props.photoPath ? (
                    <img src={props.photoPath} alt="UserPhoto" />
                ) : (
                    <img
                        src="https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg"
                        alt="UserHaveNoPhoto"
                    />
                )}
            </div>
        </header>
    );
};


type LoginUserPanelT = {
    login: string | null;
    logout: () => void;
}

export const LoginUserPanel = (props: LoginUserPanelT) => {
    return(
        <div>{props.login} - <button onClick={() => props.logout()}>Logout</button></div>
    )
}

export default Header;

