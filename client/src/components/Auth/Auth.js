import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Icon from './icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import dotenv from 'dotenv';
import Input from './Input';
import { signin, signup } from '../../actions/auth';

const initalState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};
dotenv.config();

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const [isDemoLogin, setIsDemoLogin] = useState(false);
  const [formData, setFormData] = useState(initalState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDemoLogin) {
      dispatch(signin({
        firstName: 'Demo',
        lastName: 'Account',
        email: 'demo@gmail.com',
        password: '123456',
        confirmPassword: '123456'
      }, history));
    } else {
      if (isSignup) {
        dispatch(signup(formData, history));
      } else {
        dispatch(signin(formData, history));
      }
    }

  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value}); //Textfield name must be same as object properties
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH' , data: { result, token }}); //dispatching action and sending payload

      history.push('/'); // Redirect back to home upon authorization
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = () => {
    console.log('Google Sign In was unsuccessful. Try again later');
  }

  return (
    
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.title} variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} noValidate={isDemoLogin} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />

            {isSignup && <Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password' />}
          </Grid>          
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_ID}
            render={(renderProps) => (
              <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Sign in with Google
              </Button>
            )}

            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Button type='submit' fullWidth variant='outlined' color='secondary' className={classes.demoSubmit} onClick={() => setIsDemoLogin(true)}>
            Demo Login
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button className={classes.switchText} onClick={switchMode}>
                { isSignup ? "Already have an accounts? Sign In" : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

    </Container> 
    
  );
};

export default Auth;