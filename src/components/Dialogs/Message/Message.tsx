import React, { useContext } from "react";
import classes from "./Message.module.css";

type MessageType = {
  message: string;
};

export const Message: React.FC<MessageType> = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};