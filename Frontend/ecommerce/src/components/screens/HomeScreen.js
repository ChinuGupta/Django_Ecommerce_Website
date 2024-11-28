import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Card from "../Card.js";
import "./../../x.css";
import Product from "../Product";
import { listProducts } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import Footer from "../Footer";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);

  const { error, loading, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  return (
    <>
    <Container id="product">
      <br />
      <h3 className="product-heading my-5">PRODUCT CATEGORIES</h3>

      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
    <Footer/>
    </>
  );
}
