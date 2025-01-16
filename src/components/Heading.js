
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Header = () => { 

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          JONNO.
        </Typography>
        <div>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Contact</Button>
          <IconButton color="inherit">
            <Brightness4Icon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;