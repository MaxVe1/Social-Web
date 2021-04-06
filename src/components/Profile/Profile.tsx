
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileItemT} from "../../redux/entities";

type ProfilePropsT = {
    profile: UserProfileItemT;
    status: string;
    updateUserStatus: (status: string) => void;
}

const Profile: React.FC<ProfilePropsT> = (props) => {
    const {profile, status, updateUserStatus} = props;
    return (
        <main>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <MyPostsContainer />
        </main>
    );
};

export default Profile;