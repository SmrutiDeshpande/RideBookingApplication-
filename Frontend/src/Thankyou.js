import React from "react";
import Header from './NavBar/Header';
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

const Thankyou = () => { 
    let history=useHistory(); 
    return (
        <div >
            <Header />
            <h1 style={{
                display: "flex",
                textAlign: "center",  
            alignItems: 'center',
            justifyContent: 'center',
            height: '65vh',
            fontSize: '70px'
            
            }}>Thankyou</h1>
            <Footer/>
        </div>

        );
    };
    
    export default Thankyou;