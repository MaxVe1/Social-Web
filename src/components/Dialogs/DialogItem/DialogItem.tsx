import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from './DialogItem.module.css';
import { DialogItemType } from '../../../redux/state';


export const DialogItem = (props: DialogItemType) => {
  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      {/*<img className={classes.userLogo} src={props.logo} alt="Avatar" />*/}
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};
