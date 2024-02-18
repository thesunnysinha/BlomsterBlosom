import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = ({setAccessToken,username}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the access token from local storage
    localStorage.removeItem('access_token');
    setAccessToken(null);
    alert("Logged out successfully!")
    // Navigate to the home page
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Home
        </Typography>

        <>
          <Typography variant="h6" sx={{padding:"10px"}}> {username}</Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
