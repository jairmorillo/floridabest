import React, { useRef } from 'react';
import {useState} from 'react';
import emailjs from 'emailjs-com';


const FormEstimate = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setshowError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_5fiojyr", "template_7reoxoo", form.current, 'user_azkl9HX9Zera3At19ySmq')
      .then((result) => {
        console.log("SUCCESS!", result.status, result.text);
        setShowMessage(true);

      }, (error) => {
          console.log(error.text);
          setshowError(true);
      });
  };


  return (
    <>
     <div className="FormContact" id="Free">
<div className="container">
  <form ref={form} onSubmit={sendEmail}>
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <h1>Free Estimate</h1>
        { showMessage ? <div className="alert alert-success col-md-12 mx-auto" role="alert">Email Send Success!!</div> : ''}

        { showError ? <div className="alert alert-warning col-md-12 mx-auto" role="alert">Email Not Success!!</div> : ''}

      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="form-group">
          <label for="exampleFormControlSelect1">Service</label>
          <select
            className="form-control"
            id="Service"
            name="Service"  
            required          
          >
            <option value=""> Select an option </option>

            <option value="Roofing">Roofing</option>
            <option value="Roof Coating">Roof Coating</option>
            <option value="Windows/Doors">Windows/Doors</option>
            <option value="Kitchen &amp; Bathroom Renovations">
              Kitchen &amp; Bathroom Renovations
            </option>
            <option value="Interior/Exterior Painting">
              Interior/Exterior Painting
            </option>
            <option value="Foundations">Foundations</option>
            <option value="IBluePrints">IBluePrints</option>
            <option value="Drafting &amp; Architecture">
              Drafting &amp; Architecture
            </option>
            <option value="Post -  Construction Cleanups ">
              Post - Construction Cleanups{" "}
            </option>
            <option value="Gutters">Gutters</option>
            <option value="Minor Repairs">Minor Repairs</option>
            <option value="Handyman Service">Handyman Service</option>
            <option value="Windows/ Doors Repair">
              Windows/ Doors Repair
            </option>
            <option value="Junk Removal">Junk Removal</option>
            <option value="House Cleaning">House Cleaning</option>
            <option value="Pressure Washing">Pressure Washing</option>
          </select>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="form-group">
          <label for="exampleFormControlSelect1">Contact Person</label>
          <input
            class="form-control"
            type="text"
            placeholder=""
            id="ContactPerson"
            name="ContactPerson"
            required
           />
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="form-group">
          <label for="exampleFormControlSelect1">Contact Email</label>
          <input
            class="form-control"
            type="text"
            placeholder=""
            id="ContactEmail"
            name="ContactEmail"
            required
                  />
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="form-group">
          <label for="exampleFormControlSelect1">Contact Phone</label>
          <input
            class="form-control"
            type="text"
            placeholder=""
            id="ContactPhone"
            name="ContactPhone"
            required
          />
        </div>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="form-group">
          <label for="exampleFormControlSelect1">
            Postal Code / Zip Code
          </label>
          <input
            class="form-control"
            type="text"
            placeholder=""
            id="Zip"
            name="Zip"
          />
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6">
        <div className="form-group">
          <label for="exampleFormControlSelect1">Location</label>
          <input
            class="form-control"
            type="text"
            placeholder=""
            id="Location"
            name="Location"
            
          />
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="form-group">
          <label for="exampleFormControlSelect1">
            Is it a emergency?
          </label>
          <select
            className="form-control"
            id="emergency"
            name="emergency"
          
          >
            <option>It's Not An Emergency.</option>
            <option>I Have An Emergency!</option>
          </select>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="form-group">
          <label for="exampleFormControlSelect1">
            Are you Homeowner?
          </label>
          <select
            className="form-control"
            id="Homeowner"
            name="Homeowner"
        
          >
            <option>I'm The Homeowner</option>
            <option>I'm The Desicion Maker</option>
            <option>I'm Not The Homeowner</option>
          </select>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            Tell us about your project
          </label>
          <textarea
            class="form-control"
            id="Tell"
            rows="3"
            name="Tell"
           
          ></textarea>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <input type="submit" class="btn btn-primary" value="Send" />       
      </div>
    </div>
  </form>
</div>
</div>
    </>
  );
};

export default FormEstimate;
