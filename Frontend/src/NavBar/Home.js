
// import "./App.css";
import Header from "./Header";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login  from "./Login";
import Register from "./Register";
import Confirm from "../Confirm";
import About from "./About";
import Footer from "../Footer";
import Slider from "./Slider";


function Home() {
  return(
    <div className="App">

        
      
       
          <Header />
          <Slider />
          <Footer />
          



          
         

    
    </div>
  );
}

export default Home;
