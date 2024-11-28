import React from "react";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./../x.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import Footer from "./Footer";
function Header() {
  const location = useLocation();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div>
        <Navbar
          className="navbar navbar-expand-lg bg-light "
          data-bs-theme="light"
          expand="lg"
        >
          <div className="container-fluid">
            <LinkContainer to="/">
              <Nav.Link className="navbar-brand mx-4">
                <img src="./img2.png" alt="" style={{ width: "120px" }} />
              </Nav.Link>
            </LinkContainer>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor03"
              aria-controls="navbarColor03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
                <li className="nav-item ">
                  <LinkContainer to="/">
                    <Nav.Link className="nav-link active fw-bold mx-3 my-2">
                      Home
                    </Nav.Link>
                  </LinkContainer>
                </li>
                <li className="nav-item mx-3 my-2">
                  <LinkContainer to="/about">
                    <Nav.Link className="nav-link fw-bold">About</Nav.Link>
                  </LinkContainer>
                </li>
              </ul>
              {userInfo ? (
                <li className="nav-item dropdown list-unstyled mx-2 justify-content-center mx-3 my-3">
                  <LinkContainer to="/">
                    <Nav.Link
                      className="nav-link dropdown-toggle fw-bold"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Welcome {userInfo.name}
                    </Nav.Link>
                  </LinkContainer>
                  <div className="dropdown-menu ">
                    <Nav.Link className="dropdown-item custom-link  "onClick={logoutHandler}>
                      Logout
                    </Nav.Link>
                  </div>
                </li>
              ) : (
                <li className="nav-item dropdown list-unstyled mx-2 justify-content-center mx-3 my-3">
                <LinkContainer to="/signup">
                  <Nav.Link
                    className="nav-link dropdown-toggle fw-bold"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    New User?
                  </Nav.Link>
                </LinkContainer>
                <div className="dropdown-menu ">
                  <LinkContainer to="/login">
                    <Nav.Link className="dropdown-item custom-link">
                      Login
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/signup">
                    <Nav.Link className="dropdown-item custom-link">
                      Signup
                    </Nav.Link>
                  </LinkContainer>

                  
                </div>
              </li>
              )}

              <li className="nav-item  list-unstyled mx-3 my-2">
                <LinkContainer to="/cart">
                  <Nav.Link className="nav-link">
                    <img src="./bag.png" alt="" style={{ width: "30px" }} />
                  </Nav.Link>
                </LinkContainer>
              </li>
            </div>
          </div>
        </Navbar>
        {location.pathname === "/" && (
          <header>
            <img
              className="header-img "
              src="https://team90degree.com/html/tf/bestshop-new-demo/bestshop-demo/img/slider/slide2.jpg"
              alt=""
            />
            <div className="header-text container">
              {" "}
              <h1
                className="header-h1"
                style={{
                  position: "absolute",
                  top: 250,
                  left: 120,
                  zIndex: 1,
                  fontSize: "2.7rem",
                }}
              >
                <b style={{ color: "#00CB99" }}> Discover </b> Your New Favorite
                Brands <br />
                <span>
                  Get <b style={{ color: " #00cb99 " }}>30% </b>off on New
                  Arrivals
                </span>
              </h1>
              <button
                className="header-h5 header-btn "
                style={{
                  position: "absolute",
                  top: 400,
                  left: 120,
                  zIndex: 1,
                  fontSize: "1.5rem",
                  backgroundColor: " #00cb99 ",
                  padding: "9px",
                  margin: "2px",
                  border: "none",
                }}
              >
                <h5>Shop Now</h5>
              </button>
            </div>
          </header>
        )}
      </div>
      
    </>
  );
}

export default Header;
