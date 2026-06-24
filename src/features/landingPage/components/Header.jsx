import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header container">
      <div>
        <div className="logo">
          <Link to="/" className="link-class_txtNone">
            <span className="logo_title">Zentelex</span>
          </Link>
          <span className="logo_badge">HRMS</span>
        </div>
        <div>XYZ</div>
      </div>
    </section>
  );
};

export default Header;
