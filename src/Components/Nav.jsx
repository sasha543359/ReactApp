import React from "react";
import s from './Nav.module.css'

function Navbar() {
    return (
        <ul className={s.Navigation}>
  <li className={s.NavigationLi}><a className={s.NavigationA} href="default.asp">Profile</a></li>
  <li className={s.NavigationLi}><a className={s.NavigationA} href="news.asp">Messages</a></li>
  <li className={s.NavigationLi}><a className={s.NavigationA} href="contact.asp">News</a></li>
  <li className={s.NavigationLi}><a className={s.NavigationA} href="about.asp">Music</a></li>
</ul>
    );
}

export default Navbar