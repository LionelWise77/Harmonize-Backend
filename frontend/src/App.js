import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import Logout from "./pages/Logout";
import Tasks from "./pages/Tasks";
import CalendarView from "./pages/Calendar";
import styles from "./App.module.css";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("access_token"));
  const username = localStorage.getItem("username") || "User";
  const [quote] = useState("");

  return (
    <Router>
      <div className={styles.App}>
        {/* Header */}
        <Header auth={auth} username={username} />

        {/* Main Content */}
        <Switch>
          <Route exact path="/">
            <HeroSection auth={auth} quote={quote} />
          </Route>

          <Route path="/signin">
            <SignInForm setAuth={setAuth} />
          </Route>

          <Route path="/signup">
            <SignUpForm />
          </Route>

          <Route path="/logout">
            <Logout setAuth={setAuth} />
          </Route>

          {auth && (
            <>
              <Route path="/tasks">
                <Tasks />
              </Route>
              <Route path="/calendar">
                <CalendarView />
              </Route>
            </>
          )}

          {/* 404 - Not Found */}
          <Route>
            <h1 className={styles.notFound}>404 - Page Not Found</h1>
          </Route>
        </Switch>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
