import React from "react";
import {addPostCreator, updateNewPostCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/reduxStore";
import { StoreContext } from "../../../StoreContext";

/*type MyPostsPropsType = {
    store: StoreType
};*/

const MyPostsContainer: React.FC = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    const addPost = () => {
                        store.dispatch(addPostCreator());
                    };

                    const onPostChangeHandler = (text: string) => {
                        store.dispatch(updateNewPostCreator(text));
                    };

                    return (
                        <MyPosts
                            updateNewPostText={onPostChangeHandler}
                            addPost={addPost}
                            posts={state.profilePageData.postsData}
                            newPostText={state.profilePageData.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
