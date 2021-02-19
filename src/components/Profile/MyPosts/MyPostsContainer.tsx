import React from "react";
import {addPostCreator, updateNewPostCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/reduxStore";

type MyPostsPropsType = {
    store: StoreType
};

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostCreator());
    };

    const onPostChangeHandler = (text: string) => {
        if (text) {
            props.store.dispatch(updateNewPostCreator(text));
        }
    };

    return (
        <MyPosts
            updateNewPostText={onPostChangeHandler}
            addPost={addPost}
            posts={state.profilePageData.postsData}
            newPostText={state.profilePageData.newPostText}
        />
    );
};

export default MyPostsContainer;
