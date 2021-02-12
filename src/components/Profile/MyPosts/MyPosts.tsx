import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {PostsDataType,ActionType,addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/state';
import {ProfilePropsType} from "../Profile";

type MyPostsPropsType = {
    posts: Array<PostsDataType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();


    const addPost = () => {
        props.dispatch(addPostActionCreator())
        //props.addPost()
    };
    const onPostChangeHandler = () => {
        const text = newPostElement.current?.value;

        if (text) {
            props.dispatch(updateNewPostTextActionCreator(text));
        }
    }

    return (
        <div className={classes.postBlock}>
            <h2>My posts</h2>
            <div className={classes.postEdit}>
                <textarea onChange={onPostChangeHandler} ref={newPostElement} value={props.newPostText}/>
                <button onPointerDown={addPost}>Add post</button>
            </div>
            <div>

                {props.posts.map(post => <Post
                    key={post.id}
                    message={post.message}
                    likeCount={post.likes}
                />)}

            </div>
        </div>
    );
};

export default MyPosts;
