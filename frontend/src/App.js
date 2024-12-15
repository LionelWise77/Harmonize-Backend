import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Tasks from "./pages/Tasks";
import Register from "./pages/Register";
import CalendarView from "./pages/Calendar";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("access_token"));
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (auth) {
      // Simula obtener el nombre de usuario del localStorage o la API
      const storedUser = localStorage.getItem("username") || "User";
      setUsername(storedUser);
    }
  }, [auth]);

  return (
    <Router>
      <Header auth={auth} username={username} />
      <Switch>
        <Route exact path="/">
          <h1>Welcome to Harmonize Calendar</h1>
        </Route>
        <Route path="/login">
          <Login setAuth={setAuth} setUsername={setUsername} />
        </Route>
        <Route path="/logout">
          <Logout setAuth={setAuth} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {auth && (
          <Route path="/calendar">
            <CalendarView />
          </Route>
        )}
        {auth && (
          <Route path="/tasks">
            <Tasks />
          </Route>
        )}
        <Route>
          <h1>404 - Page Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
