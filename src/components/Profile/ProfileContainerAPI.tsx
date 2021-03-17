import { AppStateType } from "../../redux/reduxStore";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profilePageReducer";
import { ProfileContainer } from "./ProfileContainer";
import {UserProfileItemT} from "../../redux/entities";

type mapStateToPropsT = {
    profile: UserProfileItemT
}

const mapStateToProps = (state: AppStateType): mapStateToPropsT  => {
    return {
        profile: state.profilePageData.profile
    };
};
export const ProfileContainerAPI = connect(mapStateToProps, { setUserProfile })(ProfileContainer);