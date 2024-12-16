import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  // Estado del formulario
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { username, email, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  // Manejar cambios en los inputs
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/login"); // Redirige a la página de login
    } catch (err) {
      setErrors(err.response?.data || {});
    }
  };

  return (
    <Row className={styles.Row}>
      {/* Columna Izquierda - Formulario */}
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={styles.Header}>Sign Up</h1>

          <Form onSubmit={handleSubmit}>
            {/* Username */}
            <Form.Group controlId="username">
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
            {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            {/* Email */}
            <Form.Group controlId="email">
              <Form.Control
                className={styles.Input}
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {errors.email?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            {/* Password */}
            <Form.Group controlId="password1">
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            {/* Confirm Password */}
            <Form.Group controlId="password2">
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            {/* Botón de Submit */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign Up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>

        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/login">
            Already have an account? <span>Sign In</span>
          </Link>
        </Container>
      </Col>

      {/* Columna Derecha - Imagen */}
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={appStyles.FillerImage}
          src="https://source.unsplash.com/featured/?nature,zen"
          alt="Sign Up Illustration"
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;
