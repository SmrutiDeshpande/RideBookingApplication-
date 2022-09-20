import React from "react";
import styled from "styled-components";
import homeImage from "./hero.png";
import Header from "../NavBar/Header";
import "./hero.css"
import Testimonials from "./Testimonials";
import {globalemail} from "../NavBar/Login"
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Hero() {


  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [ridetype, setRidetype] = useState("");
  const [mobile, setMobile] = useState("");
  
  let history=useHistory();


   async function handleSubmit(event)
   {
       event.preventDefault();
    
   try{
       
        await axios.post("http://localhost:8010/bookride",
       {
     
       source: source,
       destination: destination ,
       date: date,
       ridetype: ridetype,
       mobile: mobile,
       
       });
       alert("Redi Booking is Successfully");
       setSource("");
       setDestination("");
       setDate("");
       setRidetype("");
       setMobile("");
       history.push("/thankyou");
       

       console.log(source);
       console.log(destination);
       console.log(date);
      //  console.log(ride);
      //  history.push("/loginpage");

       
   } 
   catch(err)
       {
         alert(" Booking Failed ");
       //   alert(err);
       }
  }





  console.log(globalemail);
  return (
    <>
    <Section id="hero">
      <Header />
      <div className="background">
      
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Book Your Ride </h1>
          <p>
          Online RideBooking application which allows you to book your rides from any corner of the country
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">From</label>
            <input type="text" placeholder="Enter Source location"
            name="source"
            required
            onChange={(event)=>
              {
                  setSource(event.target.value);
                  console.log(event.target.value);
              }}
           
            />

          </div>


          
          <div className="container">
            <label htmlFor="">To</label>
            <input type="text" placeholder="Enter Destination location" 
            name="destination"
            required
            onChange={(event)=>
            {
                setDestination(event.target.value);
            }}
            
            />

          </div>




          <div className="container">
            <label htmlFor="">Date</label>
            <input type="date"
            required

            onChange={(event) =>
              {  
                  setDate(event.target.value);      
              }}

             />
          </div>
          

         {/* <div className="container">
            <label htmlFor="">Persons</label>
            <input type="text" pattern="[0-5]*" placeholder="No of passengers"
            required
            onChange={(event) =>
              {  
                  setPassengers(event.target.value);      
              }}
            />
          </div>  */}

          

          <div className="container">
          <label htmlFor="">Type of ride</label>
          <select name="selectList" id="selectList" placeholder="Type of ride" 
          required
          onChange={(event) =>
            {  
                setRidetype(event.target.value);
                // console.log(event.target.value);

            }}
          >
            
          <option value="car">Car</option>
            <option value="Auto">Auto</option>
            <option value="Bike">Bike</option>
            
            </select>
          </div>  


         <div className="container">
            <label htmlFor="">Phone</label>
            <input type="text"  placeholder="Your Mobile Number" 
            required
            onChange={(event) =>
              {  
                  setMobile(event.target.value);      
              }}
            
            />
          </div>
          <div className="container">
          <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
     
    </Section>
    <Testimonials/>
   </>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      width: 100%;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 0.5rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 55rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.5rem;
        gap: 0.5rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
