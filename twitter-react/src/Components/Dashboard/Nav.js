import React from 'react';
import './Nav.css';

const Navbar = () => {
  return (
    <div className="side-navbar">
      <ul>
        <li><a href="TodoList">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
       <div class="settings-links">

        <a href="#">Settings & Privacy
        </a>
    </div>

    <div class="settings-links">

        <a href="#">Help & Support
        </a>
    </div>

    <div class="settings-links">

        <a href="#">Display & Accessibility
        </a>
    </div>

    <div class="settings-links">

        <a href="/">Logout
        </a>
    </div>
    </div>
    
  );
};

export default Navbar;


