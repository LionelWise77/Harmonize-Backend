import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/SignInUpForm.module.css";
import btnStyles from "../styles/Button.module.css";
import appStyles from "../App.module.css";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

const Login = ({ setAuth, setUsername }) => {
  // Estado del formulario
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginData;

  const [errors, setErrors] = useState({});
  const history = useHistory();

  // Manejar cambios en los inputs
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/dj-rest-auth/login/", loginData);
      localStorage.setItem("access_token", response.data.key);
      localStorage.setItem("username", username);
      setAuth(true);
      setUsername(username);
      history.push("/"); // Redirige al Home
    } catch (err) {
      setErrors(err.response?.data || { non_field_errors: ["Login failed."] });
    }
  };

  return (
    <Container
      className={`${appStyles.Content} p-4 mt-5`}
      style={{ maxWidth: "400px" }}
    >
      <h1 className={styles.Header}>Login</h1>
      <Form onSubmit={handleSubmit}>
        {/* Username */}
        <Form.Group controlId="username">
          <Form.Label className="d-none">Username</Form.Label>
          <Form.Control
            className={styles.Input}
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="password">
          <Form.Label className="d-none">Password</Form.Label>
          <Form.Control
            className={styles.Input}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Mostrar errores */}
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="danger" className="mt-2">
            {message}
          </Alert>
        ))}

        {/* Botón de envío */}
        <Button
          className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
          type="submit"
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
