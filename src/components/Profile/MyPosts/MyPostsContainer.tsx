import React from "react";
import { addPost, updateNewPost } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { AppStateType} from "../../../redux/reduxStore";
import { connect } from "react-redux";
import { PostsDataType } from "../../../redux/entities";

type MapStateType = {
    posts: Array<PostsDataType>;
    newPostText: string;
};
type MapDispatchType = {
    updateNewPost: (param: string) => void;
    addPost: () => void;
};

type OwnPropsType = {};

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        posts: state.profilePageData.postsData,
        newPostText: state.profilePageData.newPostText
    };
};
export const MyPostsContainer = connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
    updateNewPost,
    addPost
})(MyPosts);

export default MyPostsContainer;
