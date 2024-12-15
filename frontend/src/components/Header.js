import React from "react";
import { Link } from "react-router-dom";

function Header({ auth, username }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Harmonize Calendar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {auth ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/calendar">
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tasks">
                  Tasks
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link font-weight-bold text-primary">
                  {`Welcome, ${username}`}
                </span>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
