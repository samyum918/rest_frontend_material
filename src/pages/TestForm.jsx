import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
}));

const TestForm = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h5">Test</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <TextField id="standard-basic" label="Standard" fullWidth autoFocus />
        </Grid>
        <Grid item xs={6}>
          <TextField id="standard-basic2" label="Standard2" fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <TextField id="standard-basic3" label="Standard3" fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <TextField id="standard-basic4" label="Standard4" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField id="standard-basic5" label="Standard5" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField id="standard-basic6" label="Standard6" fullWidth />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TestForm;
