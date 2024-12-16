import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = ({ auth, username }) => {
  return (
    <nav className={styles.NavBar}>
      <div className={styles.Brand}>
        <Link to="/">Harmonize Calendar</Link>
      </div>

      <ul className={styles.NavLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {auth ? (
          <>
            <li className={styles.Welcome}>Welcome, {username}</li>
            <li>
              <Link to="/logout" className={styles.Logout}>
                Logout
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default Header;
