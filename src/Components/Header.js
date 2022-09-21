import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      
      <nav class="navbar navbar-expand-lg navbar-secondary bg-light rounded">
        <a class="navbar-brand" href="/">
          Anime Facts📝
        </a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
