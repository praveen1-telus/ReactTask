import React, { useState } from 'react';
import LoginImage from "./LoginImage.webp";
import { TextField, Button, Checkbox, FormControlLabel, RadioGroup, Radio, FormGroup, FormControl, FormLabel, Grid, Typography, Container } from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    hobbies: {
      reading: false,
      teaching: false,
      playing: false,
      others: false
    },
    profilePicture: null,
    country: '',
    bio: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name in formData.hobbies) {
        setFormData({
          ...formData,
          hobbies: {
            ...formData.hobbies,
            [name]: checked
          }
        });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else if (type === 'file') {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      gender: '',
      hobbies: {
        reading: false,
        teaching: false,
        playing: false,
        others: false
      },
      profilePicture: null,
      country: '',
      bio: '',
      agree: false
    });
  };

  return (
    <Container component="main" maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} style={{ height: "800", padding: 0 }}>
        <img src={LoginImage} className="img-fluid" alt="Placeholder"  />
                </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
          Register Here
          </Typography>
            
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="fullName"
                  label="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="username"
                  label="Username"
                  value={formData.username}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="phoneNumber"
                  label="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="date"
                  name="dateOfBirth"
                  label="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Hobbies</FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hobbies.reading}
                          onChange={handleChange}
                          name="reading"
                        />
                      }
                      label="Reading"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hobbies.teaching}
                          onChange={handleChange}
                          name="teaching"
                        />
                      }
                      label="Teaching"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hobbies.playing}
                          onChange={handleChange}
                          name="playing"
                        />
                      }
                      label="Playing"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hobbies.others}
                          onChange={handleChange}
                          name="others"
                        />
                      }
                      label="Others"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                >
                  Upload Profile Picture
                  <input
                    type="file"
                    hidden
                    name="profilePicture"
                    onChange={handleChange}
                  />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="country"
                  label="Country"
                  value={formData.country}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="bio"
                  label="Bio"
                  multiline
                  rows={4}
                  value={formData.bio}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agree}
                      onChange={handleChange}
                      name="agree"
                    />
                  }
                  label="I agree with terms and conditions"
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
                <Button variant="contained" color="secondary" onClick={handleReset} style={{ marginLeft: '10px' }}>
                  Reset
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegistrationForm;
 