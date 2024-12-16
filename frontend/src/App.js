import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Tasks from "./pages/Tasks";
import CalendarView from "./pages/Calendar";
import styles from "./App.module.css";
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("access_token"));
  const [username, setUsername] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    if (auth) {
      const storedUser = localStorage.getItem("username") || "User";
      setUsername(storedUser);
    }

    const quotes = [
      "Breathe, focus, and accomplish one task at a time.",
      "Small steps each day lead to big success.",
      "Harmony is the key to productivity.",
      "Stay calm, stay organized, stay Harmonized.",
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [auth]);

  return (
    <Router>
      <Header auth={auth} username={username} />

      <Switch>
        <Route exact path="/">
          <HeroSection quote={quote} auth={auth} />
        </Route>

        <Route path="/login">
          <Login setAuth={setAuth} setUsername={setUsername} />
        </Route>
        <Route path="/logout">
          <Logout setAuth={setAuth} />
        </Route>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        {auth && (
          <>
            <Route path="/calendar">
              <CalendarView />
            </Route>
            <Route path="/tasks">
              <Tasks />
            </Route>
          </>
        )}

        <Route>
          <h1 className={styles.notFound}>404 - Page Not Found</h1>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
