import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faInstagram);

const Footer = () => {
  return (
    <>
      <section className="Footer">
        <div className="container">
          <footer className="text-white text-center text-lg-start">
            <div className="text-center p-3">
              ©{" "}
              <a className="text-white" href="#">
               Best Roofers inc
              </a>
              . All rights reserved 2021
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Footer;
