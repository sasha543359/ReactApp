import React from "react";
import s from "./../Dialogs.module.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Message = function (props) {
  return <div> {props.Message}</div>;
};

export default Message;
