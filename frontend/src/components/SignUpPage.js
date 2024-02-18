import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
} from '@mui/material';
import { API_URL } from '../services/apiConfig';


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: '',
    subscription_type: '',
    owner_name: '',
    contact_number: '',
    address: '',
    forest_name: '',
    location: '',
    soil_type: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to your API endpoint
      const response = await fetch(`${API_URL}/api/forest_owner`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Handle the success response as needed
      alert('Form submitted successfully');
    } catch (error) {
      alert('Error submitting form:', error.message);
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField label="Username" name="username" value={formData.username} onChange={handleChange} fullWidth required />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} fullWidth required />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} fullWidth required />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select name="role" value={formData.role} onChange={handleChange} required>
              <MenuItem value="Forest Owner">Forest Owner</MenuItem>
              <MenuItem value="Botanical Owner">Botanical Owner</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel>Subscription Type</InputLabel>
            <Select name="subscription_type" value={formData.subscription_type} onChange={handleChange} required>
              <MenuItem value="Free">Free</MenuItem>
              <MenuItem value="Premium">Premium</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Role-specific fields */}
      {formData.role === 'Forest Owner' && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField label="Owner Name" name="owner_name" value={formData.owner_name} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField label="Contact Number" name="contact_number" value={formData.contact_number} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField label="Forest Name" name="forest_name" value={formData.forest_name} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField label="Location" name="location" value={formData.location} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField label="Soil Type" name="soil_type" value={formData.soil_type} onChange={handleChange} fullWidth required />
          </Grid>
        </Grid>
      )}

      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </Box>
    </form>
  );
};

export default SignUpPage;
