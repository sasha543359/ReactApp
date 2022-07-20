import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div><Header /></div>
        <div className='Content'>
          <Navbar />
          <Routes>
              <Route path="/profile" element={<Profile/>} />
              <Route path="/dialogs" element={<Dialogs/>} />
               {/* <Route path="/news" element={<News/>} />
              <Route path="/music" element={<Music/>} />  */}
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;
