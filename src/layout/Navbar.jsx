import React from "react";
import Logo from "../img/logo-litle-color.png";
const Navbar = () => {
  return (
    <>
      <header className="Header p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 ttext-black text-decoration-none"
            >
              <img src={Logo} alt="" className="" />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#home" className="nav-link px-2 text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#Services" className="nav-link px-2 text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="#Services" className="nav-link px-2 text-black">
                  Services
                </a>
              </li>

              <li>
                <a href="#Contact" className="nav-link px-2 text-black">
                  Contact
                </a>
              </li>
            </ul>

            <div className="text-end">
            <a href="#Free"  className="btn btn-warning">
                Get Free Estimate
            </a>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
