import { Button, TextField, AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./NavbarStyles.css";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
 
  return (
    <Box className="navbar">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography>
            <img src={logo }  alt=""/>
          </Typography>
          <Box className="btn-contaner">
            <Link to="/login"><Button color="inherit" className="btn" size="large">Login</Button></Link>
            <Link to="/signup"><Button color="inherit" className="btn"  size="large">Sign up</Button></Link>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
