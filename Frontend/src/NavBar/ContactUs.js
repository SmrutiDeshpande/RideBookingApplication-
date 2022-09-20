import axios from "axios";
import { useState } from "react";
import "./Register.css";
import Header from "./Header";
import { useHistory } from "react-router-dom";


 
function ContactUs()
{
   const [name,setName]=useState("");
   const [phone,setPhone]=useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   let history=useHistory();  

   async function handleSubmit(event)
    {
        event.preventDefault();
    
 try{       
         await axios.post("http://localhost:8010/contactus",
        {
        name: name,
        phone:phone,
        email: email,
        message : message,
        
        });
          alert("Message Submitted Successfully");
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          history.push("/thankyou");
 }    
    catch(err)
        {
          alert("Failed to submit the message try once again");
          
        }
   }
    return (
        <div className="register-container">
              <Header />
            
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Contact Us</h1>
            <br></br> 
            <br></br> 
            <p>Fill in the Information Below</p>
         
            <input type="text"
             name="name"
             placeholder="Your Name"
             min="1"
            required        
             onChange={(event) =>
              {
                  setName(event.target.value);      
              }}
            />

            <input type="text"
             name="Phone"
             placeholder="Your Phone Number"
             pattern="^[+]91(9|8|7)\d{9}$"
             title="Enter the valid mobile number "
              required      
             onChange={(event) =>
              {
                  setPhone(event.target.value);      
              }}
            />
 
            <input type="email"
             name="email"
             placeholder="Your Email"
              required      
             onChange={(event) =>
              {
                  setEmail(event.target.value);      
              }}
            />


 
            
           
        <input type="text"
            name="message"
            placeholder="Your Message"
            required
            onChange={(event) =>
                {
                    setMessage(event.target.value);      
                }}          
            />
 
    
 
            <button type="submit">Submit</button>
 
    
            </form>    
 
    
        </div>
    )
}

export default ContactUs;