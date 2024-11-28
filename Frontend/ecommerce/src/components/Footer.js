import React from "react";

function Footer() {
  return (
    <footer
      className="d-flex justify-content-between align-items-center bg-body-tertiary p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      {/* Left-aligned Text */}
      <div className="text-body mx-5">
        © 2024 Copyright Ecom
      </div>

      {/* Right-aligned Social Media Icons */}
      <div className="d-flex mx-5">
        {/* Facebook */}
        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        {/* Twitter */}
        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-twitter"></i>
        </a>

        {/* Google */}
        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-google"></i>
        </a>

        {/* Instagram */}
        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-instagram"></i>
        </a>

        {/* Linkedin */}
        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        {/* Github */}
        <a
          data-mdb-ripple-init
          className="btn btn-link btn-floating btn-lg text-body m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
