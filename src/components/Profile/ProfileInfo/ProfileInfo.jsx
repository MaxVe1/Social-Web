import React  from 'react';
import s from'./ProfileInfo.module.css';


 const ProfileInfo = () =>{
   return (
       <div>
           <div><img src ="https://media.gettyimages.com/photos/the-end-of-a-rainbow-with-a-field-in-the-foreground-picture-id104637612?s=612x612"></img></div>
           <div className={s.descriptio}>
               ava+ descr
           </div>
       </div>
        )
}

export default ProfileInfo;