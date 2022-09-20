import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";


export default function Testimonials() {

   const [myfeedback,setMyFeedback]=useState([]);
  //  let feedbackApiData = Observable<userEffect>[];
  const [noOfElement,setnoOfElement]=useState(2);
  const slice=myfeedback.slice(0,noOfElement);
  const loadMore=() =>{
    setnoOfElement(noOfElement+2);
  }
useEffect(() => {
  axios.get("http://localhost:8010/feedback")
  .then((res) =>

  setMyFeedback(res.data)
 
  );


},[]);



  

  return (
    <Section id="testimonials">
      <div className="title">
       
        
      <Link to="/feedbackform"><button  > Give Feedback </button></Link>  
        
        
        {/* <Button> Give Feedback  </Button> */}
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        {/* <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO - Shashaan Web Solutions</span>
          
            </div>
          </div>
        </div> */}
        <div className="testimonial">
        

          {
            slice.map((post)=>{
                // for (let index = 0; index < Object.keys(post).length; index++) {
                  
                  // console.log(myfeedback);
                
                  
                // }
               
              
                const {id, username, feedback}=post;

            return (
          //   <div>
          //   <p>
          //   {feedback}
          // </p>
          // <div className="info">
          //   {/* <img src={avatarImage} alt="" /> */}
          //   <div className="details">
          //   <h4>{name}</h4> 
          //   </div>
          // </div>
          // </div>
          
          <div className="testimonial">
          <p>
            {username}
          </p>
          <div className="info">
            {/* <img src={avatarImage} alt="" /> */}
            <div className="details">
              <h4>{feedback}</h4>
              {/* <span>{username}</span> */}
            </div>
          </div>
        </div>
            );
          })}
      
          
        </div>
        {/* <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div> */}
        
     
      </div>
      <button  onClick={() => loadMore()}>Load More</button>
<br />
<br />
<Footer />
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  // button {
  //   display: flex;
  //   justify-content: center;
  //   padding: 1rem;
  //   cursor: pointer;
  //   border-radius: 0.3rem;
  //   border: none;
  //   margin-left:auto;
  //   margin-right:auto;
  //   color: white;
  //   background-color: #4361ee;
  //   font-size: 1.1rem;
  //   text-transform: uppercase;
  //   transition: 0.3s ease-in-out;
  //   &:hover {
  //     background-color: #023e8a;
  //   }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }

      }


    }

  }
  button {
    display: flex;
      justify-content: center;
      padding: 1rem;
      cursor: pointer;
      border-radius: 0.3rem;
      border: none;
      margin-left:auto;
      margin-right:auto;
      color: white;
      background-color: #4361ee;
      font-size: 1.1rem;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #023e8a;
      }
  }
  @media screen and (min-width: 280px) and (max-width: 1500px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
