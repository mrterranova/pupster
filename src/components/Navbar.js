import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
      <div>
          <Link to="/" className="navbar-brand">Pupster App</Link>
          <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
          <Link to="/discover" className={(window.location.pathname === "/discover") ? "nav-link active" : "nav-link"}>Discover</Link>
        <Link to="/search" className={(window.location.pathname === "/search") ? "nav-link active" : "nav-link"}>Search</Link>
      </div>
  )
}

export default Navbar;
