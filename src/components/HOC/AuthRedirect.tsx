import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";

type MapStateToPropsT = {
    isAuth: boolean;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsT => {
    return {
        isAuth: state.auth.isAuth
    };
};

export function AuthRedirect<T>(Component: React.ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsT) => {
        const { isAuth, ...restProps } = props;

        if (!isAuth) return <Redirect to={"/login"} />;

        return <Component {...(restProps as T)} />;
    };

    return connect(mapStateToProps)(RedirectComponent);
}
