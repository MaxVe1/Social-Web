import React from "react";
import { addPost } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { AppStateType} from "../../../redux/reduxStore";
import { connect } from "react-redux";
import { PostsDataType } from "../../../redux/entities";

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