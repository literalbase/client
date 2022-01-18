import React, { useEffect, useState } from "react";
import "./navbar.css";
import "../../index.css";
import { Link } from "react-router-dom";

const getStorageTheme = () => {
    let theme = "light-theme";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
    return theme;
  };
function Navbar() {
    const [theme, setTheme] = useState(getStorageTheme());

    const toggleTheme = () => {
      if (theme === "light-theme") {
        setTheme("dark-theme");
      } else {
        setTheme("light-theme");
      }
    };
    useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
    }, [theme]);
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <div className="logo-div">Hackers News</div>
        <div className="search-bar">
          <label placeholder="Search"> </label>
        </div>
        <div className="Sign_In">
        <Link className="button_button" to = '/signin'>
          <button>Sign In</button>
        </Link>
        </div>
        <div className="darkmode-button">
          <button onClick={toggleTheme}>Dark</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
