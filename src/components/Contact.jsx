import React from "react";
import img from "../img/r2_c1.png";

const Contact = (props) => {
  return (
    <>
      <section className="Contact">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-justify">
              <h1>Why us ?</h1>
              <p className="Contact-text">
                Our experts will provide you with different affordable,
                realistic and adaptable options through our different payment
                methods to give you a world of choices that will make your
                project successful and enjoyable!
              </p>
              <p className="Contact-text">
                Once you call us, our experts will give you all the information
                you need to provide you with a free in-home technical visit to
                estimate the costs of your project and as quickly as in the
                first 24 hours you will have all the details!
              </p>
              <p className="Contact-text">
                Safety comes first, we will take care of you and your family's
                as well as your environment's protection during the process, our
                deliveries are characterized by being clean and harmless so you
                can enjoy and experience the satisfaction that only we can give
                you!
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img
                src={img}
                alt=""
                className="Contact_image"
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12-m text-center">
              <h2 className="">Are you insteresd in our services ?</h2>
              <h3>CALL US TO REQUEST A FREE, NO OBLIGATORI DEMOSTRATION</h3>
              <a href="tel:+1305912207">
                <h1 className="phone">+ 1 305 912 2207</h1>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
