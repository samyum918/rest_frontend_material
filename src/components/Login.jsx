import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Box,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useUserDispatch, loginUser } from "../context/UserContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  creatingButtonContainer: {
    marginTop: theme.spacing(2.5),
    height: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  let userDispatch = useUserDispatch();

  const classes = useStyles();

  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>
        <div className={classes.form}>
          <TextField
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <div className={classes.creatingButtonContainer}>
            {isLoading ? (
              <CircularProgress size={26} />
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={nameValue.length === 0 || passwordValue.length === 0}
                onClick={() =>
                  loginUser(
                    userDispatch,
                    nameValue,
                    passwordValue,
                    props.history,
                    setIsLoading,
                    setError
                  )
                }
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
