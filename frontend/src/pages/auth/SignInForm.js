import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const SignInForm = () => {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});
  const history = useHistory();

  // Manejar cambios en los campos
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      localStorage.setItem("access_token", data.key); //
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data || {});
    }
  };

  return (
    <Row className={styles.Row}>
      {/* Columna Izquierda: Formulario */}
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={styles.Header}>Sign In</h1>
          <Form onSubmit={handleSubmit}>
            {/* Campo Username */}
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                className={styles.Input}
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

            {/* Campo Password */}
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className={styles.Input}
                value={password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            {/* Botón de envío */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign In
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>

        {/* Enlace al formulario de registro */}
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>

      {/* Columna Derecha: Imagen */}
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src="https://source.unsplash.com/featured/?productivity,focus"
          alt="Sign In Illustration"
        />
      </Col>
    </Row>
  );
};

export default SignInForm;
