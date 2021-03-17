import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { UserProfileItemT } from "../../redux/entities";

type ProfileContainerPropsT = {
    setUserProfile: (profile: UserProfileItemT) => void;
    profile: UserProfileItemT
};

export class ProfileContainer extends React.Component<ProfileContainerPropsT> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}