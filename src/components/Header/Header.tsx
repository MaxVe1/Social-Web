import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
//import { SetAuthUserDataAT } from "../../redux/authReducer";

type HeaderPropsT = {
    isAuth: boolean;
    login: string | null;
    photoPath: string | null
};

const Header = (props: HeaderPropsT) => {
  return  (
    <header className={s.header}>
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        alt="Logo" />
        <div className ={s.loginBlock}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>

        <div className={s.loginBlock}>{props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>} {props.photoPath ? <img src={props.photoPath} alt="UserPhoto"/> : <img src="https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg" alt="UserHaveNoPhoto"/>}</div>
    </header>
  );
}

export default Header;

