import React from "react";

function Header() {
    return(
        <div class="header">
  <a href="#default" class="logo"><img width={100} height={50} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"/></a>
  <div class="header-right">
    <a class="active" href="#home"><img width={20} height={20} src="https://www.pngall.com/wp-content/uploads/4/Settings-PNG-Images.png"></img></a>
    
    <a href="#about">LogOut</a>
  </div>
</div>
    );
}

export default Header