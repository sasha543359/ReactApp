import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DialogItem from "./Components/DialogPage/DialogItem/DialogsItem";
import Messages from "./Components/DialogPage/Message/Message";
import state from "./state";

// let database = [
//   { name: "Alberto", id: 1 },
//   { name: "Antinio", id: 2 },
//   { name: "Cucubau", id: 3 },
// ];

// let messagedata = [
//   { id: 1, message: "Hi" },
//   { id: 1, message: "Albertoooo HOLA" },
//   { id: 1, message: "HOLA" },
// ];


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
