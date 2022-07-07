import React from "react";
import s from './Header.module.css'

function Header() {
    return(
        <div class={s.header}>
  <a href="#default" class={s.logo}><img width={100} height={50} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"/></a>
  <div class={s.headerRight}>
    <a class={s.active} href="#home"><img width={20} height={20} src="https://www.pngall.com/wp-content/uploads/4/Settings-PNG-Images.png"></img></a>
    
    <a href="#about">LogOut</a>
  </div>
</div>
    );
}

export default Header