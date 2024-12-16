import React, { useState } from "react";
import SignUpForm from "../pages/auth/SignUpForm";
import Login from "../pages/Login";
import styles from "../styles/HeroSection.module.css";

const HeroSection = ({ quote }) => {
  const [showForm, setShowForm] = useState(null); // Controla qué formulario mostrar

  return (
    <div className={styles.heroContainer}>
      {/* Sección Izquierda */}
      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>Harmonize Daily Planner</h1>
        <p className={styles.heroQuote}>{quote}</p>

        {/* Botones Sign Up y Sign In */}
        {!showForm && (
          <div className={styles.heroButtons}>
            <button
              className={styles.heroButton}
              onClick={() => setShowForm("signup")}
            >
              Sign Up
            </button>
            <button
              className={styles.heroButton}
              onClick={() => setShowForm("signin")}
            >
              Sign In
            </button>
          </div>
        )}

        {/* Formularios Condicionales */}
        {showForm === "signup" && (
          <div className={styles.formContainer}>
            <SignUpForm />
          </div>
        )}
        {showForm === "signin" && (
          <div className={styles.formContainer}>
            <Login />
          </div>
        )}
      </div>

      {/* Sección Derecha */}
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
