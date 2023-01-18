import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import "../css/Nav.css";
import { Link } from "react-router-dom";
import { Button, IconButton, Typography } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../actions/userActions";
function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  
  return (
    <div className="Nav">
      <Link className="link" to="/home">
        <h2>IMS</h2>
      </Link>
      <div className="logout">
        <IconButton onClick={logOutHandler} sx={{ color: "#1779f1" }}>
          <LogoutIcon></LogoutIcon>
          <Typography>LOGOUT</Typography>
        </IconButton>
      </div>
    </div>
  );
}

export default Nav;
