import React from "react";
import './about.css';
import Header from './Header';
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <Header />
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <br/>
            
            <h1>Welcome to Ride Booking Application</h1>
            <br/>
          

            <p>
            The Ride booking applications are a solution to several problems like reducing the waiting time on the road, looking out for cabs under the sun.
            After opening the website, users can register themselves and enter their source and destination locations, so that it is easy for them to book a taxi in just a click. The app also allows them to make a choice of the vehicle they want to commute in. 
            This saves them a lot of time and energy.
            </p>
            <br/>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="https://www.mobulous.com/blog/wp-content/uploads/Taxi-Booking-App-development.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;