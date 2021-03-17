import { AppStateType } from "../../redux/reduxStore";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setUserProfile } from "../../redux/profilePageReducer";
import { ProfileContainer } from "./ProfileContainer";
import {UserProfileItemT} from "../../redux/entities";

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

export const ProfileContainerAPI = connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
