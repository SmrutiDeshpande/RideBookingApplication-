import axios from "axios";
import { useState } from "react";
import "./NavBar/Register.css";
import Header from "./NavBar/Header";
import { useHistory } from "react-router-dom";

 
function Confirm()
{
   const [confirmpassword, setConfirmPassword] = useState("");
   const [password, setPassword] = useState("");
   
   let history=useHistory();

    async function handleSubmit(event)
    {
        event.preventDefault();
        
     
    try{
        if(password==confirmpassword){
         await axios.put("http://localhost:8010/resetpassword",
        {
      
        confirmpassword: confirmpassword,
        password : password
        
        });
          alert("Password Changed Successfully");
      
         
          setPassword("");
          setConfirmPassword("");
          history.push("/loginpage");

         
    } 
    else{
        alert("Passwords did not match");
    }
}

    catch(err)
        {
          alert("Chance Password request failed");
          alert(err);
        }
   }
    return (
        <div className="register-container">
            
            <Header />
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Password Reset</h1>
            <br></br>    
            <br></br>    
            <p>Fill in the Information Below</p>
 
            <input type="text"
            name="password"
            placeholder="New Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least  or more characters"
            required
            onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}          
            />


            <input type="text"
            name="confirmpassword"
            placeholder="Confirm New Password"
            required
            onChange={(event) =>
                {
                    setConfirmPassword(event.target.value);      
                }}          
            />
 
    
 
            <button type="submit">Reset</button>
 
    
            </form>    
 
    
        </div>
    )
}

export default Confirm;