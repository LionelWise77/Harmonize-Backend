import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  const [quote, setQuote] = useState("");

  // Quotes
  useEffect(() => {
    const quotes = [
      "Breathe, focus, and accomplish one task at a time.",
      "Small steps each day lead to big success.",
      "Harmony is the key to productivity.",
      "Stay calm, stay organized, stay Harmonized.",
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className={styles.heroContainer}>
      {/* Left Section */}
      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>Harmonize Daily Planner</h1>
        <p className={styles.heroQuote}>{quote}</p>
        <div className={styles.heroButtons}>
          <Link to="/signup" className={styles.heroButton}>
            Sign Up
          </Link>
          <Link to="/signin" className={styles.heroButton}>
            Sign In
          </Link>
        </div>
      </div>

      {/* Right secction */}
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