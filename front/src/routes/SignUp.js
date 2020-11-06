import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'orangered',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    backgroundColor: 'limegreen',
    '&:hover': {
      backgroundColor: '#4de34d',
    },
  },
}));

const SignUp = () => {
  const classes = useStyles();

  const personTemplate = {
    name: '',
    member_id: '',
    password: '',
  };

  const [member, setMember] = useState(personTemplate);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  const [isPwdCorrect, setIsPwdCorrect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'firstName') {
      setFirstName(value);
    }
    if (name === 'lastName') {
      setLastName(value);
    }
    if (name === 'email') {
      setId(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const passwordDuplicateCheck = (e) => {
    const { value } = e.target;

    if (value !== password) {
      setIsPwdCorrect(false);
    } else {
      setIsPwdCorrect(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isPwdCorrect) {
      alert('비밀번호가 일치하지않습니다.');
    } else {
      const fullName = `${firstName} ${lastName}`;
      setMember({
        name: fullName,
        member_id: id,
        password,
      });
      console.log(member);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                autoComplete="fname"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email Address"
                name="email"
                variant="outlined"
                required
                fullWidth
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                name="password"
                variant="outlined"
                type="password"
                required
                fullWidth
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="passwordCheck"
                label="PasswordCheck"
                name="passwordCheck"
                variant="outlined"
                type="password"
                required
                fullWidth
                autoComplete="current-password"
                onChange={passwordDuplicateCheck}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
