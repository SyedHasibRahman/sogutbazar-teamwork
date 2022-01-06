import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Product = (props) => {
  const { name, img, price } = props.product;

  const useStyle = makeStyles({
    navBtn: {
      color: "#000",
      textDecoration: "none",
    },
    btnColor: {
      background: "#251D58 !important",
      color: "#fff !important",
      textTransform: "none !important",
    },
  });

  const { navBtn, btnColor } = useStyle();

  return (
    <Grid sx={{ mt: 2, mb: 8 }} item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
        <CardMedia
          component="img"
          style={{
            width: "100%",
            height: "220px",
            margin: "0 auto",
            marginTop: "10px",
            padding: "2px",
          }}
          image={img}
          alt="green iguana"
        />
        <CardContent sx={{ px: 2 }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#16322E",
              fontWeight: 600,
            }}
            variant="h6"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "#251D58",
              fontWeight: 600,
            }}
            variant="h6"
            component="div"
          >
            <span style={{ fontWeight: "bold" }}>Price: </span>
            <span style={{ color: "red" }}>BDT {price}</span>
          </Typography>
          <Typography
            sx={{
              mt: 2,
              mb: 1,
              textAlign: "center",
            }}
          >
            <NavLink className={navBtn} to="">
              <Button className={btnColor}>View Details</Button>
            </NavLink>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
