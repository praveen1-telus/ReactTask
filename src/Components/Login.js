import "./login.css"

import React, { useState } from "react"
import LoginImage from "./LoginImage.webp"
import {
  Container,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Box,
} from "@mui/material";


const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Container className="mt-5">
      <Grid container justifyContent="center">
        <Grid item md={8}>
          <Grid container>
            <Grid item md={6}>
              
              <img src={LoginImage} className="img-fluid1" alt="Placeholder" />
            </Grid>
            <Grid item md={6} className="mt-4">
              <form id="loginForm" onSubmit={handleSubmit}>
              <Typography variant="h4" gutterBottom >
                LOGIN HERE
              </Typography>
                <Box mb={2}>
                  <TextField
                    id="username"
                    name="username"
                    label="USERNAME"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    id="password"
                    name="password"
                    label="PASSWORD"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      name="rememberMe"
                      color="primary"
                    />
                  }
                  label="Remember Me"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                >
                  Login
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;