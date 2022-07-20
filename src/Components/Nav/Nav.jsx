import React from "react";
import s from './Nav.module.css'
import {NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <ul className={s.Navigation}>
  <li className={s.NavigationLi}><NavLink className={navData => navData.isActive ? s.active : s.NavigationA} to="/profile">Profile</NavLink></li>
  <li className={s.NavigationLi}><NavLink className={navData => navData.isActive ? s.active : s.NavigationA} to="/dialogs">Messages</NavLink></li>
  <li className={s.NavigationLi}><NavLink className={navData => navData.isActive ? s.active : s.NavigationA} to="/news">News</NavLink></li>
  <li className={s.NavigationLi}><NavLink className={navData => navData.isActive ? s.active : s.NavigationA} to="/music">Music</NavLink></li>
</ul>
    );
}

export default Navbar