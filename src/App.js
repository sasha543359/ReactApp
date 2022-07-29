import "./App.css";
import React, { Component } from "react";
import Header from "./Components/Header2/Navbar.js";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/DialogPage/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Header />
        </div>
        <div className="Content">
          <Navbar />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogelements={props.state.dialogsPage.database}
                  messageelements={props.state.dialogsPage.messagedata}
                />
              }
            />
            {/* <Route path="/news" element={<News/>} />
              <Route path="/music" element={<Music/>} />  */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
