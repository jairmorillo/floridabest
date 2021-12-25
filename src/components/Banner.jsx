import logowh from'../img/medio.png';
const Banner = () => {
  return (
    <>
      <section className="Banner">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">

                  </div>
                  <div className="col-md-6 cont">
                  <img src={logowh} alt="" className="Contact_Image" width="50%" height="auto"/>
                      <div className="text">
                  Helping homeowners with their renovations for many years, we are committed to quality and extremely fast completion times with the best customer service!.
                        <a href="tel:+1305912207"><h1>+ 1 305 912 2207</h1></a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Banner;
