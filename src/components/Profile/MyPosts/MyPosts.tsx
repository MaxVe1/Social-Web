import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import { PostsDataType } from "../../../redux/entities";

type MyPostsPropsType = {
    posts: Array<PostsDataType>;
    newPostText: string;
    updateNewPost: (param: string) => void;
    addPost: () => void;
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onClickAddPost = () => {
        props.addPost();
    };
    const onPostChangeHandler = () => {
        const text = newPostElement.current?.value || "";
        props.updateNewPost(text);
    };

    return (
        <div className={classes.postBlock}>
            <h2>My posts</h2>
            <div className={classes.postEdit}>
                <textarea onChange={onPostChangeHandler} ref={newPostElement} value={props.newPostText} />
                <button onPointerDown={onClickAddPost}>Add post</button>
            </div>
            <div>
                {props.posts.map((post) => (
                    <Post key={post.id} message={post.message} likeCount={post.likes} />
                ))}
            </div>
        </div>
    );
};

export default MyPosts;