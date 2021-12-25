const MainSlider = (props) => {

   return (
    <>
      <section className="MainSlider" id="home">
      <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
            {props.children}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainSlider
