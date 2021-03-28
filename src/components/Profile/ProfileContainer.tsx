import React from "react";
import Profile from "./Profile";
import { UserProfileItemT } from "../../redux/entities";
import { RouteComponentProps } from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router";

type ProfileContainerPropsT = {
    getUserProfile: (userId: number) => void;
    profile: UserProfileItemT;
    defaultUserId: number;
};
type RouteType = {
    userId: string;
};

class ProfileContainer extends React.Component<ProfileContainerPropsT & RouteComponentProps<RouteType>> {
    componentDidMount() {
        let userId = +this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

type mapStateToPropsT = {
    profile: UserProfileItemT
    defaultUserId: number
}

const mapStateToProps = (state: AppStateType): mapStateToPropsT  => {
    return {
        profile: state.profilePageData.profile,
        defaultUserId: state.profilePageData.defaultUserId
    };
};

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));