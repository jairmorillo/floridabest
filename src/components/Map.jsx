import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faPhoneSquareAlt, faAddressCard, faEnvelope);

const Map = () => {
  return (
    <>
      <section className="Map" id="Contact">
        <div className="Map-bordes_top_bottom">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12  col-md-4 col-lg-4">
                    <div className="icon-container">
                      <span className="icon">
                        <FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" />
                      </span>
                      <span className="icon-text">
                        <b className="phone">+1 305 912 2207</b>
                      </span>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12  col-md-4 col-lg-4">
                    <div className="icon-container">
                      <span className="icon">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />{" "}
                      </span>
                      <span className="icon-text">
                        <b className="email">
                          info@floridabestroofers.com
                        </b>
                      </span>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12  col-md-4 col-lg-4">
                    <div className="icon-container">
                      <span className="icon">
                        <FontAwesomeIcon icon={faAddressCard} size="2x" />
                      </span>
                      <span className="icon-text">
                        <b className="address">
                          300 SE 2nd , Fort Lauderdale, FL 33302, EE.
                          UU.
                        </b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default Map;
