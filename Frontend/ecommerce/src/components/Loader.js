import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <div>
      <Spinner animation="border" variant="success" />
    </div>
  );
}
