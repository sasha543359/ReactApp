import './App.css';
import React, {Component} from 'react';
import Header from './Components/Header';
import Navbar from './Components/Nav';
import Profile from './Components/Profile';

function App()
{
  return (
    
   <div className='AppWraper'>
    <Header />
    <Navbar />
    <Profile />
   </div>
    
  )
}

export default App;
