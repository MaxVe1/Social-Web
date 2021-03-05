import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/reduxStore";
import { UserType } from "../../redux/entities";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: Array<UserType>;
};

type MapDispatchToProps = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
    };
};

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(Users);




