import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia, Rating } from "@mui/material";

const Review = (props) => {
  const { name, image, feedback, rating } = props.review;
  return (
    <Grid sx={{ mt: 4 }}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{
            width: "30%",
            margin: "0 auto",
            padding: "8px",
          }}
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{ px: 2 }}>
          <Typography
            sx={{ textAlign: "center", my: 2, color: "text.secondary" }}
            variant="body2"
          >
            <span>&#10077;</span>
            {feedback}
            <span>&#10078;</span>
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="body2">
            <span style={{ color: "blue" }}>&#10149; {name}</span>
          </Typography>
          <Typography sx={{ textAlign: "center", my: 2 }} variant="body2">
            <Rating name="read-only" value={rating} readOnly />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Review;
