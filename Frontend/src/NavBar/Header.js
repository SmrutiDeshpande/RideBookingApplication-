import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { Link } from 'react-router-dom';
import { View, Text } from "react-native";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const checkMatch=useMediaQuery(theme.breakpoints.up("sx"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#000000" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
         

        {/* { checkMatch ?(
          <>
          <Typography md={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Ride Booking Application 
              </Typography> 
          </>
        ):()
} */}

          {isMatch ? (
            <>
            
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Ride Booking Application 
              </Typography> 
               <DrawerComp />
             
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginRight: "auto", marginLeft:"auto" }}

                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                  
                {/* <Tab label="Products" />
                <Tab label="Services" /> */}
            {/* <Tab  >< a href="/loginpage">   label="About Us" </a></Tab>
                <Tab label="Contact" /> */}

<Typography variant="h4" align="center">
                Ride Booking Application 
              </Typography>

              </Tabs>

              {/* <Link to="/loginpage">
              <Tab label="login" />
              </Link> */}

<View style={{ marginLeft:20}}>
              <Link to="/about">
              <Button  className="button-style" >
              <Text style={{ color:"#FFFFFF",fontWeight: 'bold'}}>
                              About
                              </Text>
              </Button>
              </Link>
              </View>

              <View style={{ marginLeft:20 }}>
                              <Link to="/contact">
                              <Button  className="button-style"  >
                              <Text style={{ color:"#FFFFFF",fontWeight: 'bold'}}>
                              Contact
                              </Text>
                              </Button>
                              </Link>
                              </View> 

                              <View style={{ marginLeft:20}}>
                              <Link to="/loginpage">
                              <Button  className="button-style"  >
                              <Text style={{ color:"#FFFFFF",fontWeight: 'bold'}}>
                              Login
                              </Text>
                              </Button>
                              </Link>
                              </View> 


                <View style={{ marginLeft:20}}>
                              <Link to="/registerpage">
                              <Button  className="button-style"  >
                              <Text style={{ color:"#FFFFFF",fontWeight: 'bold'}}>
                              SignUp
                              </Text>                              
                              </Button>
                              </Link>
                              </View>        
              
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
