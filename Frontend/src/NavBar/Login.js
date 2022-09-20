import axios from "axios";
import { useState } from "react";
import "./Register.css";
import Header from "./Header";
import { useHistory } from "react-router-dom";

 export let globalemail="";
 
function Login()

{
  
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   let history=useHistory();
 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try{
        
         await axios.post("http://localhost:8010/login",
        {
      
        email: email,
        password : password,
        
        });
          alert("User Login Successfully");
          setEmail("");
          
          setPassword("");
          history.push("/ridebook");
    }  
    catch(err)
        {
          alert("Check your Email or Password");
          alert(err);
        }
   }
    return (
        <div className="register-container">
              <Header />
            
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Login</h1>
          
            <br></br> 
            <br></br> 
            <p>Fill in the Information Below</p>
 
            <input type="email"
             name="email"
             placeholder="Your Email"
                    
             onChange={(event) =>
              {
                  setEmail(event.target.value);      
              }}
            />


 
            
            {/* <input type="text"
            name="name"
            placeholder="name"
            onChange={(event) =>
                {
                    setName(event.target.value);      
                }}          
            /> */}
        <input type="text"
            name="password"
            placeholder=" Your Password"
            onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}          
            />
 
    
 
            <button type="submit">Login</button>
            <br />
            

           <a href="/forgetpassword">Forgot Password</a>
 
    
            </form>    
 
    
        </div>
    )
}

export default Login;