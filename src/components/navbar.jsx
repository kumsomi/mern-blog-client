import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        Blogger's World
      </Link>
      <div className="nav-user-link">
        <Link to="/user/blogs">My Blogs</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};
