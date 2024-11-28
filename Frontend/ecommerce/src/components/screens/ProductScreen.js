import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Form,
 Button,
  Card,
  Container,
} from "react-bootstrap";
import Rating from "../Rating";
import "./../../x.css";
import { useDispatch, useSelector } from "react-redux";
import { listProductsDetails } from "../../actions/productActions";
import Loader from "../Loader";
import Footer from "../../components/Footer";

export default function ProductScreen({ params }) {
  const navigate = useNavigate();

  const location = useLocation();
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch, params]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <>
    <Container className="my-5">
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          { error }
        ) : (
          <Row>
            <Col
              md={6}
              className="my-5 d-flex justify-center align-center"
              style={{ width: "100vh", height: "50vh" }}
            >
              <Image src={product.image} alt={product.name} fluid />
            </Col>

            <Col md={3} className="my-5" style={{ width: "70vh" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.productname}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                  <b>Brand:</b> {product.productbrand}{" "}
                </ListGroup.Item>

                <ListGroup.Item>
                  <b>Description:</b> {product.productinfo}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    color={"#f8e825"}
                  />
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <b>Price:</b>
                      </Col>
                      <Col>
                        <>{product.price} Rs</>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <b>Status:</b>
                      </Col>
                      <Col>
                        {product.stockcount > 0 ? "In Stock" : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.stockcount > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col xs="auto" className="my-1">
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.stockcount).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <button
                      className="my-btn btn-block"
                      disabled={product.stockcount === 0}
                      type="button"
                      onClick={addToCartHandler}
                    >
                      <b>Add to Cart</b>
                    </button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}

        <Link to="/" className="btn my-btn my-5">
          <i className="fa-solid fa-arrow-left " style={{ color: "#000000" }}></i>
          <b className="mx-2">Back to result</b>
        </Link>
      </div>
    </Container>
    <Footer/>
   </>
  );


}

