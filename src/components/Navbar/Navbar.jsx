import {
  Button,
  TextField,
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import HandshakeTwoToneIcon from "@mui/icons-material/HandshakeTwoTone";

const Navbar = () => {
  return (
    <Box className="navbar">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography>
            <Box >
              <Link to="/" className="logo-Links">
                <HandshakeTwoToneIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                />
                <span>IRECRUITER</span>
              </Link>
            </Box>
          </Typography>
          <Box className="btn-contaner">
            <Link to="/login">
              <Button sx={{ color: "white" }} className="btn" size="large">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button sx={{ color: "white" }} className="btn" size="large">
                Sign up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
