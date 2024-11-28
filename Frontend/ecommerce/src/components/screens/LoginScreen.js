import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Card} from "react-bootstrap";
import  InputGroup  from "react-bootstrap/InputGroup";
import "./SignupScreen.css"; // Import the custom CSS file
import { Link, useNavigate ,useLocation} from "react-router-dom";
import Message from "../Message";
import { validpassword } from "./Regex";
import {login} from "../../actions/userActions"
import {useSelector,useDispatch} from "react-redux"
import Loader from "../Loader";

export default function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [show, changeshow] = useState("fa fa-eye-slash");

  const dispatch =useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const { error,loading, userInfo} = userLogin
  
  const location=useLocation();
  const redirect=location.search?location.search.split('=')[1]:'/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect || "/");
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, pass1))
  };

  const showPassword = () => {
    var x = document.getElementById("pass1");
    if (x.type === "password") {
      x.type = "text";
      changeshow("fa fa-eye");
    } else {
      x.type = "password";
      changeshow("fa fa-eye-slash");
    }
  };

  return (
    <Container className="my-3">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Card className="p-2">
            <Card.Header as="h1" className="text-center bg-black text-light">
              <h2>Log In</h2>
            </Card.Header>
            <Card.Body>
              {error && <Message variant="danger">{error}</Message>}
              {loading &&<Loader/>}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>
                    <span>
                      <i className="fa fa-envelope"></i>
                    </span>
                    Email
                  </Form.Label>
                  <Form.Control
                    className="custom-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <span>
                      <i className={show}></i>
                    </span>
                    Password
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Checkbox
                      className="custom-input-checkbutton"
                      onClick={showPassword}
                    />
                    <Form.Control
                      className="custom-input"
                      placeholder="Password"
                      required
                      value={pass1}
                      onChange={(e) => setPass1(e.target.value)}
                      type="password"
                      id="pass1"
                    />
                  </InputGroup>
                  <small>
                    Use at least 5 characters, including at least 1 letter and 2
                    numbers.
                  </small>
                </Form.Group>

                <br />
                <div className="d-grid gap-2">
                  <button className="btn btn-md btn-color" type="submit">
                    <b>Log In</b>
                  </button>
                </div>
              </Form>
              <Row className="py-3">
                <Col>
                  <span className="mx-2">New User?</span>
                  <Link to="/signup" className="text-info text-decoration-none">
                    Sign Up
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
