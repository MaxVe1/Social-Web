import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { UserProfileItemT } from "../../redux/entities";
import { RouteComponentProps } from "react-router-dom";

type ProfileContainerPropsT = {
    setUserProfile: (profile: UserProfileItemT) => void;
    profile: UserProfileItemT;
    defaultUserId: number;
};
type RouteType = {
    userId: string;
};

export class ProfileContainer extends React.Component<ProfileContainerPropsT & RouteComponentProps<RouteType>> {
    componentDidMount() {

        let userId = +this.props.match.params.userId;

        if(!userId) {
            userId = 2;
        }


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}