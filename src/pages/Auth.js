import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Logo from "../assets/Home.png";
import "../Style.css";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

export const Auth = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="cover">
      <Container>
        <Row>
          <Col className="Landing mt-5">
            <img
              src={Logo}
              className="img-fluid mt-5"
              style={{ width: "264px", height: "264px" }}
            />
            <div className="text-auth-header mt-4">ASTRONAUT</div>
            <p className="text-auth-parag mt-2 mb-5">Your Pop Corn Soulmate</p>
          </Col>
          <Col>
            <div className="text-auth-header">SIGN IN</div>
            <p className="text-auth-parag mt-1">
              Let's enjoy your popcorn you are lay down!
            </p>
            <Form>
              <Form.Group controlId="inputEmail">
                <Form.Label className="h5 fw-bold">Email</Form.Label>
                <Form.Control
                  className=" p-3 mb-4 "
                  type="email"
                  name="email"
                  // id="inputEmail"
                  // onChange={handleChange}
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-1"
                controlId="formPlaintextPassword"
              >
                {" "}
                <Input
                  className="password"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                  placeholder="Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Form.Group>
              <p className="text-end text-muted ">Forgot Password?</p>
              <Button
                className="mb-5 p-2 mt-"
                style={{
                  backgroundColor: "#2CBAD5",
                  width: "150px",
                  borderRadius: "20px",
                }}
                // onClick={handleLogin}
              >
                <h5 className="text" style={{ backgroundColor: "#2CBAD5" }}>
                  Sign In
                </h5>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
