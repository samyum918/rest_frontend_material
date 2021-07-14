import React, { Component } from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Typography } from "@material-ui/core";
import TestPage from "../pages/TestPage";
import PageNotFound from "./../pages/PageNotFound";
import { Switch, Route, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
  },
  content: {
    display: "flex",
    padding: theme.spacing(3),
    width: "100vw",
    justifyContent: "center",
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header history={props.history} />
      <Container style={{ paddingTop: "30px" }} maxWidth="lg">
        {/* core container */}
        <Switch>
          <Route path="/app/home" component={TestPage} />
          <Route
            path="/app/posts"
            component={() => (
              <Paper style={{ height: "30vh", textAlign: "center" }}>
                <Typography variant="h5">Posts</Typography>
              </Paper>
            )}
          />
          <Route
            path="/app/users"
            component={() => (
              <Paper style={{ height: "30vh", textAlign: "center" }}>
                <Typography variant="h5">Uesrs</Typography>
              </Paper>
            )}
          />
          <Route path="/app/not-found" component={PageNotFound} />
          <Redirect to="/app/not-found" />
        </Switch>
      </Container>
    </div>
  );
};

export default Layout;
