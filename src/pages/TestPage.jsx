import React from "react";
import Users from "../pages/Users";
import TestForm from "../pages/TestForm";
import Grid from "@material-ui/core/Grid";

const TestPage = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TestForm />
      </Grid>

      <Grid item xs={12}>
        <Users />
      </Grid>
    </Grid>
  );
};

export default TestPage;
