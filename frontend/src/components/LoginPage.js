import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import { API_URL } from '../services/apiConfig';
import {useNavigate} from 'react-router-dom';

const LoginPage = ({setAccessToken}) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to your login API endpoint
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      // Parse the response to get tokens and user information
      const { access_token, refresh_token, role, username } = await response.json();

      // Store tokens and user information in local storage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('role', role);
      localStorage.setItem('username', username);

      // Handle the success response as needed
      alert('Logged in successfully');

      setAccessToken(access_token)

      navigate("/")
    } catch (error) {
      alert("Login Failed");
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Username" name="username" value={loginData.username} onChange={handleChange} fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type="password" name="password" value={loginData.password} onChange={handleChange} fullWidth required />
        </Grid>
      </Grid>

      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginPage;
