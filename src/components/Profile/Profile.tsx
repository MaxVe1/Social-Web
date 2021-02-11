import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import { ActionType, PostsDataType } from '../../redux/state';


export type ProfilePropsType = {
    data: {
        postsData: Array<PostsDataType>
        newPostText: string
    }
    dispatch: (action: ActionType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts posts={props.data.postsData}
                     newPostText = {props.data.newPostText}
                     dispatch={props.dispatch}/>
        </main>

    );
};

export default Profile;