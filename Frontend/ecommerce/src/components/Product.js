import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./../components/Rating";
import { Link } from "react-router-dom";
import "./../x.css";

export default function Product({ product }) {
  return (
    <Card className="my-5 p-3 product-div  " style={{ width: "310px" }}>
      <Link to={`/product/${product._id}`} className="nav-link">
        <Card.Img src={product.image} style={{ objectFit: "cover" }}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="nav-link ">
          <Card.Title as="h4">
            <strong className="p-name">{product.productname}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">{product.rating} from {product.numReviews} reviews</div>
        </Card.Text>
        <Card.Text as="h6">
          <div className="my-3">
            <b style={{color:"00cb99"}}>Price:{product.price}Rs</b>
          </div>
        </Card.Text>

        <Rating
          value={product.rating}
          text={`${product.numReviews} reviews`}
          color={"#f8e812"}
        />
      </Card.Body>
    </Card>
  );
}
