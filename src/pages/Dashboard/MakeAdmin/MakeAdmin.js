import { Alert, Button, Box, TextField, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeAdmin, setMakeAdminStatus } from "../../../store/adminDashboard";

const MakeAdmin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  // const [success, setSuccess] = useState(false);
  const success = useSelector(
    (state) => state.entities.adminDashboard.makeAdmin.adminAddSuccess
  );

  setTimeout(() => {
    dispatch(setMakeAdminStatus({ status: false }));
  }, 5000);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    dispatch(makeAdmin(email));
    // console.log(user);
  };

  return (
    <Box
      sx={{ background: "#adacac", p: 4, mx: 32, mt: 4, borderRadius: "15px" }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "green" }}
        gutterBottom
      >
        Make Admin
      </Typography>
      <Grid container justifyContent="center">
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "100%" }}
            label="Email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <br />
          <Button sx={{ mt: 4 }} type="submit" variant="contained">
            Make Admin
          </Button>
        </form>
      </Grid>
      {success && (
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mt: 4 }}
          gutterBottom
        >
          <Alert severity="success">Made Admin successfully!</Alert>
        </Typography>
      )}
    </Box>
  );
};

export default MakeAdmin;
