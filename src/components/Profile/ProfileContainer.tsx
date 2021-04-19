import React from "react";
import Profile from "./Profile";
import { RouteComponentProps } from "react-router-dom";
import { AppStateType } from "../../redux/reduxStore";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profilePageReducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import {AuthRedirect} from "../HOC/AuthRedirect";

type mapStateToPropsT = ReturnType<typeof mapStateToProps>;

type ProfileContainerPropsT = mapStateToPropsT &  {
    authorizedUserId: number;
    getUserProfile: (userId: number) => void;
    getUserStatus: (userId: number) => void;
    updateUserStatus: (status: string) => void;
};
type RouteType = {
    userId: string;
};

class ProfileContainer extends React.Component<ProfileContainerPropsT & RouteComponentProps<RouteType>> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }


    render() {
        const { profile, status, updateUserStatus } = this.props;
        return <Profile {...this.props} profile={profile} status={status} updateUserStatus={updateUserStatus} />;
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePageData.profile,
        defaultUserId: state.profilePageData.defaultUserId,
        status: state.profilePageData.status,
        authorizedUserId: state.auth.data.id,
        isAuth: state.auth.isAuth
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter, AuthRedirect
)(ProfileContainer);