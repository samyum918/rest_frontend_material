import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import { useUserDispatch, signOut } from "../context/UserContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  tabButton: {
    textTransform: "none",
  },
  indicator: {
    backgroundColor: "white",
  },
}));

const Header = (props) => {
  const userDispatch = useUserDispatch();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  function setActiveTab(e, value) {
    setValue(value);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs
          value={value}
          onChange={setActiveTab}
          classes={{
            indicator: classes.indicator,
          }}
        >
          <Tab label="Test" component={Link} to="/app/home" />
          <Tab label="Posts" component={Link} to="/app/posts" />
          <Tab label="Users" component={Link} to="/app/users" />
        </Tabs>

        <div className={classes.grow}></div>
        <Button
          className={classes.tabButton}
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
