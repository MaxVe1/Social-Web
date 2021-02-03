import React  from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

 /* let posts = [
    {id:1, message: 'it is my first post',likesCount: '11'},
    {id:2, message:'hi how are you',likesCount: '12'}
]*/


const MyPosts = (props) =>{
    let postsElements =  props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>);
   return <div className={s.postBlock}>
   <h3>My Post</h3>
   <div>
       <div>
           <textarea>   </textarea>
       </div>
       <div>
           <button>Add post</button>
       </div>

   </div>
   
   <div className={s.posts}>
       {postsElements}
      
   </div>

 </div>

}


export default MyPosts;