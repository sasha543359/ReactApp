import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';

function App() {
  return (

    <div>
      <div><Header /></div>
      <div className='Content'>

        <Navbar />


        <Profile />

      </div>
    </div>

  )
}

export default App;
