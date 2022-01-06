import React from "react";
import Box from "@mui/material/Box";
import { CardMedia, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PreccriptionImg from "../../../assets/services-image/order_medicine.png";
import CallOrderImg from "../../../assets/services-image/call_to_order.png";
import HealthcareProductsImg from "../../../assets/services-image/healthcare_products.png";

const ServiceSummary = () => {
  const useStyle = makeStyles({
    navBtn: {
      color: "#000",
      textDecoration: "none",
    },
    btnColor: {
      background: "#6c64dd !important",
      color: "#fff !important",
      textTransform: "none !important",
    },
  });

  const { navBtn, btnColor } = useStyle();
  return (
    <Box sx={ { flexGrow: 1, background: "#ebe8e8" } }>
      <Container>
        <Grid
          container
          spacing={ { xs: 2, md: 3 } }
          columns={ { xs: 4, sm: 8, md: 12 } }
        >
          <Grid sx={ { mt: 4, mb: 6 } } item xs={ 4 } sm={ 4 } md={ 4 }>
            <Card
              sx={ {
                minWidth: 275,
                border: 0,
                boxShadow: 2,
                borderRadius: "15px",
              } }
            >
              <CardMedia
                component="img"
                style={ {
                  width: "40%",
                  height: "80%",
                  margin: "0 auto",
                  marginTop: "10px",
                  padding: "10px",
                } }
                image="https://www.pinclipart.com/picdir/big/66-662356_report-vector-check-list-clipart.png"
                alt="green iguana"
              />
              <CardContent sx={ { px: 2 } }>
                <Typography
                  sx={ { textAlign: "center" } }
                  variant="h5"
                  component="div"
                >
                  <span style={ { color: "green", fontWeight: "bold" } }>
                    Upload List
                  </span>
                </Typography>
                <Typography
                  sx={ { textAlign: "center", mt: 2 } }
                  variant="p"
                  component="div"
                >
                  <span style={ { color: "grey", fontWeight: "500" } }>
                    User can order grocery by uploading their List to us.
                  </span>
                </Typography>
                <Typography
                  sx={ {
                    mt: 2,
                    mb: 1,
                    textAlign: "center",
                  } }
                >
                  <NavLink className={ navBtn } to="">
                    <Button className={ btnColor }>Upload List</Button>
                  </NavLink>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={ { mt: 4, mb: 6 } } item xs={ 4 } sm={ 4 } md={ 4 }>
            <Card
              sx={ {
                minWidth: 275,
                border: 0,
                boxShadow: 2,
                borderRadius: "15px",
              } }
            >
              <CardMedia
                component="img"
                style={ {
                  width: "40%",
                  height: "80%",
                  margin: "0 auto",
                  marginTop: "10px",
                  padding: "10px",
                } }
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwVvsVD5K22YnaqQ2cg_T18WKi4Kl_z4OSGxP82rQx43SzqOZY8q1_IfyqNTTNu7pbcQ&usqp=CAU"
                alt="green iguana"
              />
              <CardContent sx={ { px: 2, color: "red" } }>
                <Typography
                  sx={ { textAlign: "center" } }
                  variant="h5"
                  component="div"
                >
                  <span style={ { color: "green", fontWeight: "bold" } }>
                    Call to Order
                  </span>
                </Typography>
                <Typography
                  sx={ { textAlign: "center", mt: 2 } }
                  variant="p"
                  component="div"
                >
                  <span style={ { color: "grey", fontWeight: "500" } }>
                    User can order grocery by phone call [10 AM - 10 PM].
                  </span>
                </Typography>
                <Typography
                  sx={ {
                    mt: 2,
                    mb: 1,
                    textAlign: "center",
                  } }
                >
                  <NavLink className={ navBtn } to="">
                    <Button className={ btnColor }>Call to Order</Button>
                  </NavLink>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={ { mt: 4, mb: 6 } } item xs={ 4 } sm={ 4 } md={ 4 }>
            <Card
              sx={ {
                minWidth: 275,
                border: 0,
                boxShadow: 2,
                borderRadius: "15px",
              } }
            >
              <CardMedia
                component="img"
                style={ {
                  width: "40%",
                  height: "80%",
                  margin: "0 auto",
                  marginTop: "10px",
                  padding: "10px",
                } }
                image="https://media.istockphoto.com/vectors/young-woman-with-shopping-cart-full-of-food-and-drinks-vector-id1217648505?k=20&m=1217648505&s=612x612&w=0&h=SD4lgCUuxW3HSszgTJk8TKOJZXFi3q_k5VXxhR6M6mM="
                alt="green iguana"
              />
              <CardContent sx={ { px: 2 } }>
                <Typography
                  sx={ { textAlign: "center" } }
                  variant="h5"
                  component="div"
                >
                  <span style={ { color: "green", fontWeight: "bold" } }>
                    Grocery Products
                  </span>
                </Typography>
                <Typography
                  sx={ { textAlign: "center", mt: 2 } }
                  variant="p"
                  component="div"
                >
                  <span style={ { color: "grey", fontWeight: "500" } }>
                    User can order Grocery by added product inside Add to Cart.
                  </span>
                </Typography>
                <Typography
                  sx={ {
                    mt: 2,
                    mb: 1,
                    textAlign: "center",
                  } }
                >
                  <NavLink className={ navBtn } to="">
                    <Button className={ btnColor }>View All Products</Button>
                  </NavLink>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSummary;
