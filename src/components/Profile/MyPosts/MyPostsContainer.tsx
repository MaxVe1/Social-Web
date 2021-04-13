import React from "react";
import { addPost } from "../../../redux/profilePageReducer";
import { AppStateType} from "../../../redux/reduxStore";
import { connect } from "react-redux";
import { PostsDataType } from "../../../redux/entities";
import MyPosts from "./MyPosts";

type MapStateType = {
    posts: Array<PostsDataType>;
};

type MapDispatchType = {
    addPost: (param: string) => void;
};


const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        posts: state.profilePageData.postsData,
    };
};

export const MyPostsContainer = connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
    addPost
})(MyPosts);

export default MyPostsContainer;