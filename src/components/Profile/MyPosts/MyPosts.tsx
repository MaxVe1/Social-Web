import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import { MyPostsPropsType } from '../Profile';


const MyPosts = (props: MyPostsPropsType) => {
  return (
    <div className={classes.postBlock}>
      <h2>My posts</h2>
      <div className={classes.postEdit}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>

        {props.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likes} />)}

      </div>
    </div>
  );
};

export default MyPosts;

