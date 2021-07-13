import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useUserDispatch, signOut } from "../context/UserContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const userDispatch = useUserDispatch();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button
          color="inherit"
          onClick={() => signOut(userDispatch, props.history)}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
