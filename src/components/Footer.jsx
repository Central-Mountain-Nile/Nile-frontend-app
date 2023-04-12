import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <img className="logoFoot" src="/nileLogo.png" alt="" />
        <h4>Copyright Nile Marketplace Inc, 2023</h4>
        <Link to="/admin">
          <p>Admin Access</p>
        </Link>
      </div>
    </>
  );
}

export default Footer;
