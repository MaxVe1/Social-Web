import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from "../../redux/reduxStore";


export type ProfilePropsType = {
   store: StoreType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </main>

    );
};

export default Profile;