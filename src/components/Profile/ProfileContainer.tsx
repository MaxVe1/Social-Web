import React from "react";
import Profile from "./Profile";
import { UserProfileItemT } from "../../redux/entities";
import {Redirect, RouteComponentProps } from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router";
import { AuthRedirect } from "../HOC/AuthRedirect";
import { compose } from "redux";

type ProfileContainerPropsT = {
    getUserProfile: (userId: number) => void;
    profile: UserProfileItemT;
    defaultUserId: number;
    //isAuth: boolean
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
       // if(!this.props.isAuth) return <Redirect to={'/login'}/>

        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

type mapStateToPropsT = {
    profile: UserProfileItemT
    defaultUserId: number
    //isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsT  => {
    return {
        profile: state.profilePageData.profile,
        defaultUserId: state.profilePageData.defaultUserId,
        //isAuth: state.auth.isAuth
    };
};

export default compose<React.ComponentType>(connect(mapStateToProps, { getUserProfile }), withRouter, AuthRedirect)(ProfileContainer);

//export default connect(mapStateToProps, { getUserProfile })(AuthRedirect(withRouter(ProfileContainer)));