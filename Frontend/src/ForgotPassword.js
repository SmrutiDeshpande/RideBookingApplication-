import axios from "axios";
import { useState } from "react";
import "./NavBar/Register.css";
import Header from "./NavBar/Header";
import { useHistory } from "react-router-dom";
 
function ForgotPassword()
{
   const [email, setEmail] = useState("");
   
   
   let history=useHistory();
//    var showdate = new Date();
//    var displaydate=showdate.getDate() +"/" +showdate.getMonth()+"/"+ showdate.getFullYear() +"/"+ showdate.getHours();
//    console.log(displaydate);

    async function handleSubmit(event)
    {
        event.preventDefault();
     
    try{
        
         await axios.post("http://localhost:8010/forgetpassword",
        {
      
        email: email,
        
        
        });
        alert("Check Your email");
        setEmail("");
      
        
        history.push("/loginpage");

        
    } 
    catch(err)
        {
          alert("User does't exist");
        //   alert(err);
        }
   }
    return (
        <div className="register-container">
            
            <Header />
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1 className="h1tag">Reset Password</h1>
            <br></br>
            <br></br>
            {/* <p>{displaydate}</p> */}
            
            <p>Fill in the Information Below</p>
          
            <input type="email"
             name="email"
             placeholder="Enter Your Email"
             required
                    
             onChange={(event) =>
              {  
                  setEmail(event.target.value);      
              }}


            />

        
 
    
 
            <button type="submit">Submit</button>
 
    
            </form>    
 
    
        </div>
    )
}

export default ForgotPassword;