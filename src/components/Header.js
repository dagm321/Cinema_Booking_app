import React from "react";
import './css/Header.css';
function Header () {
    return (
      <>
      <div class="header">
        <div class="head">
            <div class="col-1"> 
                <a href="/Home"><h1>Booking App</h1></a> 
                <div class="line"></div>
            </div>
            <div class="col-2">
                <input type="text" placeholder="Search"></input>
            </div>
            <div class="col-3">
                <a href="">Upcomming</a>
                <a href="">Trending</a>
                <a href="">Username</a>
            </div>
        </div>
    </div>
      </>
    );
  }
  export default Header;