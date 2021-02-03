import React  from 'react';
import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) =>{
    /*let posts = [
        {id:1, message: 'it is my first post',likesCount: '11'},
        {id:2, message:'hi how are you',likesCount: '12'}
    ]*/

   return <div>
       <ProfileInfo/>
       <MyPosts posts ={props.state.posts}/>

 </div>

}


export default Profile;