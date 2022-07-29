import React from "react";
import s from "./../Dialogs.module.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const DialogItem = function (props) {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
