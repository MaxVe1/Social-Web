import React from "react";
import Profile from "./Profile";
import { UserProfileItemT } from "../../redux/entities";
import { RouteComponentProps } from "react-router-dom";
import { AppStateType } from "../../redux/reduxStore";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profilePageReducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import {AuthRedirect} from "../HOC/AuthRedirect";

type ProfileContainerPropsT = {
    id: number;
    getUserProfile: (userId: number) => void;
    getUserStatus: (userId: number) => void;
    updateUserStatus: (status: string) => void;
    profile: UserProfileItemT;
    defaultUserId: number;
    status: string;
};
type RouteType = {
    userId: string;
};

class ProfileContainer extends React.Component<ProfileContainerPropsT & RouteComponentProps<RouteType>> {
    componentDidMount() {

        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }


    render() {
        const { profile, status, updateUserStatus } = this.props;
        return <Profile {...this.props} profile={profile} status={status} updateUserStatus={updateUserStatus} />;
    }
}

type mapStateToPropsT = {
    profile: UserProfileItemT;
    defaultUserId: number;
    status: string;
    id: number | null;
};

const mapStateToProps = (state: AppStateType): mapStateToPropsT => {
    return {
        profile: state.profilePageData.profile,
        defaultUserId: state.profilePageData.defaultUserId,
        status: state.profilePageData.status,
        id: state.auth.data.id
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