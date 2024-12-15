import React, { useState } from "react";
import axios from "../api/axiosDefaults";
import "../App.css";

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("dj-rest-auth/login/", { username, password })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("username", response.data.user.username);
        setUsername(response.data.user.username);
        setAuth(true);
      })
      .catch(() => setError("Invalid username or password."));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
