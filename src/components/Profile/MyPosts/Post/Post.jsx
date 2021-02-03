import React  from 'react';
import s from'./Post.module.css';

const  Post  = (props) =>{
   console.log(props.likes);
   return <div className={s.item}>
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"></img>
          {props.message}  
          <div> <span>likes:</span>  {props.likesCount} </div>
   </div>   
   
}
export default Post;