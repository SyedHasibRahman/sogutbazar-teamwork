import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "../../Product/Product";

const BabyProducts = () => {
  const [products, setProducts] = useState([]);

  //get all packages
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const babyProducts = products.filter((p) => p.category === "baby");

  const homeBabyProducts = babyProducts.slice(0, 3);

  return (
    <Box sx={ { background: "#F6F6F6" } }>
      <Container sx={ { pt: 4 } }>
        <Divider />
        <Box
          sx={ {
            display: "flex",
            justifyContent: "space-between",
            p: 1,
          } }
        >
          <Typography
            sx={ {
              fontWeight: 500,
              mt: 1,
              color: "#251D58",
            } }
            variant="h6"
            component="div"
          >
            Popular Items
          </Typography>
          <Typography
            sx={ {
              fontWeight: 500,
              mt: 2,
              color: "#251D58",
            } }
            variant="h6"
            component="div"
          >
            <NavLink style={ { textDecoration: "none" } } to="/babyproducts">
              View All <FontAwesomeIcon icon={ faArrowRight } />
            </NavLink>
          </Typography>
        </Box>
        <Divider />
        <Grid
          container
          spacing={ { xs: 2, md: 3 } }
          columns={ { xs: 4, sm: 8, md: 12 } }
        >
          { homeBabyProducts.map((product) => (
            <Product key={ product.id } product={ product }></Product>
          )) }
        </Grid>
      </Container>
    </Box>
  );
};

export default BabyProducts;
