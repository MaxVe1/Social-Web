import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from "../../redux/reduxStore";


export type ProfilePropsType = {
   store: StoreType
}

const Profile = () => {
    return (
        <main>
            <ProfileInfo />
            <MyPostsContainer/>
        </main>

    );
};

export default Profile;