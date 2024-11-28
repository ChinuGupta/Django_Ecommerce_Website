import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Card, InputGroup } from "react-bootstrap";
import "./SignupScreen.css"; // Import the custom CSS file
import { Link, useLocation, useNavigate } from "react-router-dom";
import Message from "../Message";
import { validpassword } from "./Regex";
import { useDispatch,useSelector } from "react-redux";
import { signup } from "../../actions/userActions";
import Loader from "../Loader";


export default function SignupScreen() {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [message, setMessage] = useState("");
  const [show, changeshow] = useState("fa fa-eye-slash");
const dispatch=useDispatch();
const location=useLocation();
const redirect=location.search?location.search.split("=")[1]:"/"

const userSignup=useSelector((state)=>state.userSignup);
const{error,loading,userInfo}=userSignup;

useEffect(()=>{
  if(userInfo){
    navigate("/")
  }
},[userInfo,redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(fname,lname,email,pass1,pass2)
    if (pass1 !== pass2) {
      setMessage("Passwords do not match");
      navigate("/signup");
    } else if (!validpassword.test(pass1)) {
      setMessage("password Criteria not match");
    } else {
      
      dispatch(signup(fname,lname,email,pass1));
      setMessage("Signup successfuly done");
      navigate("/login")
    }
  };

  const showPassword = () => {
    var x = document.getElementById("pass1");
    var z = document.getElementById("pass2");
    if (x.type === "password" && z.type === "password") {
      x.type = "text";
      z.type = "text";
      changeshow("fa fa-eye");
    } else {
      x.type = "password";
      z.type = "password";
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
              <h2>Sign Up</h2>
            </Card.Header>
            <Card.Body>
              {message && <Message variant="danger">{message}</Message>}
              {loading &&<Loader/>}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="fname">
                  <Form.Label>
                    <span>
                      <i className="fa fa-user"></i>
                    </span>
                    First Name
                  </Form.Label>
                  <Form.Control
                    className="custom-input"
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="Enter your First Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lname">
                  <Form.Label>
                    <span>
                      <i className="fa fa-user"></i>
                    </span>
                    Last Name
                  </Form.Label>
                  <Form.Control
                    className="custom-input"
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    placeholder="Enter your Last Name"
                  />
                </Form.Group>
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

                <Form.Group className="mb-3" >
                  <Form.Label>
                  <span>
                      <i className={show}></i>
                    </span>
                    Confirm Password
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Checkbox className="custom-input-checkbutton" onClick={showPassword}/>
                    <Form.Control
                      className="custom-input"
                      placeholder="Confirm Password"
                      value={pass2}
                      onChange={(e) => setPass2(e.target.value)}
                      required
                      type="password"
                      id="pass2"
                    />
                  </InputGroup>
                </Form.Group>

                <br />
                <div className="d-grid gap-2">
                  <button className="btn btn-md btn-color" type="submit">
                    <b>Sign Up</b>
                  </button>
                </div>
              </Form>
              <Row className="py-3">
                <Col>
                  <span className="mx-2">Already User?</span>
                  <Link to="/login" className="text-info text-decoration-none">
                    Log In
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
