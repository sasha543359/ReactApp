import React from "react";
import s from "./Dialogs.module.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";

const Dialogs = function (props) {
  let dialogelement = props.dialogelements.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messageelement = props.messageelements.map((el) => (
    <Messages Message={el.message} />
  ));

  return (
    <div className={s.Content}>
      <div className={s.firstcolum}>{dialogelement}</div>
      <div className={s.secondcolum}>{messageelement}</div>
    </div>
  );
};

export default Dialogs;
