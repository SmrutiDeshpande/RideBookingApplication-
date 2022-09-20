import axios from "axios";
import { useState } from "react";
import "./NavBar/Register.css";
import Header from "./NavBar/Header";
import { useHistory } from "react-router-dom";
 
function Feedbackform()
{

   const [username, setUsername] = useState("");
   const [feedback, setFeedback] = useState("");
   
   let history=useHistory(); 
   const email_user = "";
    async function handleSubmit(event)
    {
        event.preventDefault();
     
    try{
        
  await axios.post("http://localhost:8010/feedbackmsg",
        {
      
        
        username : username,
        feedback : feedback,
        
        });
          alert("Feedback Submitted Successfully");
        
          setUsername("");
          setFeedback("");
      

        
    } 
    catch(err)
        {
          alert("Feedback Failed To Submit");
          alert(err);
        }
   }
    return (
        <div className="register-container">
            
            <Header />
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>FeedBack Form</h1>
            <br></br>
            <br></br>
            <p>Fill in the Information Below</p>
 
            {/* <input type="email"
             name="email"
             placeholder="Enter Your Email"
             required
                    
             onChange={(event) =>
              {  
                  setEmail(event.target.value);      
              }}


            /> */}

        <input type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            onChange={(event) =>
                {
                    setUsername(event.target.value);      
                }}          
        />


        {/* <input type="text"
            name="password"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least  or more characters"
            required
            onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}          
        />
  */}
  <br />
 
  



<textarea  name="feedback" rows="4" placeholder="Give Your Feedback"
maxlength="144"
  required
  onChange={(event) =>
      {
          setFeedback(event.target.value);      
      }} >
 </textarea>
<br />

    
 
            <button type="submit">Submit</button>
 
    
            </form>    
 
    
         </div>
    )
}

export default Feedbackform;