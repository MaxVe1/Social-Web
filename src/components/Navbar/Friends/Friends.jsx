import React  from 'react';
import s from './Friends.module.css';
import {NavLink} from 'react-router-dom';

console.log(s);
const Friends = () =>{

   /*let friendsElements = props.state.friends.map(f=><Friends friends={f.friends} />)*/

   return (<div>
      <div className={s.fri}>
         <NavLink to='/friends'><h3>Friends:</h3> </NavLink>
         <div className={s.fri_item}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"></img><br/>
            <div className={s.fri_text}>
               <span>Dimych</span>
            </div>
         </div>
         <div className={s.fri_item}>
            <img src="https://www.blexar.com/avatar.png"></img><br/>
            <div className={s.fri_text}>
               <span>Viktor</span>
            </div>
         </div>
         <div className={s.fri_item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20XYLGADeZ6bFu7HH1rErG-8Sj9PBFhzA7w&usqp=CAU"></img><br/>
            <div className={s.fri_text}>
               <span>Valera</span>
            </div>
         </div>
         {/* <div className='friends-item'>Valera</div>
            <div className='friends-item'>Sasha</div>*/}
      </div>
   </div>);

}




export default Friends;
