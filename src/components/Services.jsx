import React from 'react'
import img1 from './../img/01.png'
import img2 from './../img/02.png'
import img3 from './../img/03.png'
import img4 from './../img/04.png'
import img5 from './../img/05.png'
import img6 from './../img/06.png'
import img7 from './../img/07.png'

const Services = () => {
  return (
    <>
      <section className="Services" id="Services">
          <div className="container">
              <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
               <h2>Our Services</h2>
               <div className="text">
                   We offer a variety of services ,Adapting to your need, in everything related to repair,restoration and replacement of roofs, in residential and commertial areas.
               </div>  
              </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <a href="#Free"  >
                      <img src={img1} alt="" className="pulse" width="25%" height="auto" />
                    </a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <a href="#Free"  >
                     <img src={img2} alt="" className="pulse"  width="25%" height="auto" />
                  </a>

                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <a href="#Free"  >
                    <img src={img3} alt="" className="pulse" width="25%" height="auto"/>
                  </a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                  <a href="#Free" >
                  <img src={img4} alt="" className="pulse" width="25%" height="auto"/>
                  </a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <a href="#Free" >
                  <img src={img5} alt="" className="pulse"  width="25%" height="auto"/>
                  </a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <a href="#Free"  >
                  <img src={img6} alt="" className="pulse" width="25%" height="auto"/>
                  </a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <a href="#Free" >
                  <img src={img7} alt="" className="pulse" width="25%" height="auto"/>
                  </a>
                  </div>

              </div>
          </div>
      </section>
    </>
  )
}

export default Services;
