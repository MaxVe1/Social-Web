import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileItemT} from "../../redux/entities";

type ProfilePropsT = {
    profile: UserProfileItemT
}

const Profile: React.FC<ProfilePropsT> = (props) => {
    return (
        <main>
            <ProfileInfo profile={props.profile}/>
             <MyPostsContainer />
        </main>
    );
};

export default Profile;