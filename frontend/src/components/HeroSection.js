import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/HeroSection.module.css";

const HeroSection = ({ quote }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>Harmonize Daily Planner</h1>
        <p className={styles.heroQuote}>
          Breathe, focus, and accomplish one task at a time.
        </p>
        <div className={styles.heroButtons}>
          <Link to="/signup" className={styles.heroButton}>
            Sign Up
          </Link>
          <Link to="/login" className={styles.heroButton}>
            Sign In
          </Link>
        </div>
      </div>

      <div className={styles.heroRight}>
        <h2 className={styles.heroSubtitle}>Así se ve tu día</h2>
        <div className={styles.taskBox}>
          <div>Date: 2024-12-16</div>
          <div>10:00 AM - Morning Meditation</div>
        </div>
        <div className={styles.taskBox}>
          <div>Date: 2024-12-16</div>
          <div>2:00 PM - Work on Project Harmonize</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
