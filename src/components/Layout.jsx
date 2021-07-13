import React, { Component } from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Users from "../pages/Users";
import TestForm from "../pages/TestForm";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    overflowX: "hidden",
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
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TestForm />
          </Grid>

          <Grid item xs={12}>
            <Users />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Layout;
