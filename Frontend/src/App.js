// import "./App.css";

import Hero  from "./RideBooking/Ridebook";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login  from "./NavBar/Login";
import Register from "./NavBar/Register";
import Confirm from "./Confirm";
import About from "./NavBar/About";
import Footer from "./Footer";
import Slider from "./NavBar/Slider";
import  Home from "./NavBar/Home";
import ContactUs from "./NavBar/ContactUs";
import Feedbackform from "./Feedbackform";
import ForgotPassword from "./ForgotPassword";
import Thankyou from "./Thankyou";




function App() {
  return(
    <div className="App">

        
       <BrowserRouter>
        <Switch>
        
          <Route path="/" exact>
          <Home />
          </Route>
          <Route path="/ridebook" component={Hero} />
          <Route path="/loginpage"  component={Login} />
          <Route path="/passwordchange"  component={Confirm}/>
          <Route path="/about"  component={About}/>
         <Route path="/home"  component={Home}/>
         <Route path="/forgetpassword"  component={ForgotPassword}/>
          
          <Route path="/registerpage" component={Register} />
          <Route path="/footer" component={Footer}/>
          <Route path="/silder" component={Slider}/>
          <Route path="/contact" component={ContactUs}/>
          <Route path="/feedbackform" component={Feedbackform} />
          <Route path="/thankyou" component={Thankyou} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}
export default App;
