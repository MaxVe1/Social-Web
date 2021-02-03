import React  from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

console.log(s);


const Navbar = () =>{
   return <nav className = {s.nav}>
   <div className= {s.item} >
      <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
   </div>
   <div className= {`${s.item}`}>
      <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
   </div>
   <div className= {s.item}>
      <NavLink to='/news'>News</NavLink>
   </div>
   <div className= {s.item}>
      <NavLink to='/settings'>Settings</NavLink>
   </div>
      <div className= {s.item}>
         <NavLink to='/settings'>Friends:</NavLink>
         <div></div>
      </div>

 </nav>

}


export default Navbar;


//let s ={
// 'nav': 'Navbar_nav__2mYRv' ,
//  'item' :'Navbar_item__DPTZ5'
//  active
//}
//let c1 = 'item' ;
//let c2 = 'active';
//let classes = c1 + ''+ c2;
//let classesNEW = `${s.item} ${s.active}`;
//"item active";