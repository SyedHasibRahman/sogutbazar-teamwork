import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Navigation from "../Shared/Navigation/Navigation";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [allCategoryButtons, setAllCategoryButtons] = useState([]);

  useEffect(() => {
    const newButtons = ["All"];

    products.forEach((p) => {
      console.log(p);
      if (newButtons.indexOf(p.category) === -1) {
        console.log("category", p.category);
        newButtons.push(p.category);
      }
    });
    setAllCategoryButtons(newButtons);
  }, [products]);

  //get all packages
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setShowProducts(data);
      });
  }, []);

  const changeCategory = (name) => {
    if (name === "All") {
      setShowProducts(products);
    } else {
      const categorizedProducts = products.filter((p) => p.category === name);
      console.log(categorizedProducts);
      setShowProducts(categorizedProducts);
    }
  };

  return (
    <>
      <Navigation></Navigation>
      <Box sx={{ background: "#F6F6F6" }}>
        <h2 className="text-center pt-5">Our All Product</h2>
        <div className="d-flex justify-content-center pt-5 pb-5">
          {allCategoryButtons.map((btn) => (
            <button
              onClick={() => changeCategory(btn)}
              className="btn btn-outline-primary me-5"
            >
              {btn.toUpperCase()}
            </button>
          ))}
        </div>
        <Container>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                mt: 1,
                color: "#251D58",
              }}
              variant="h6"
              component="div"
            ></Typography>
            <Typography
              sx={{
                fontWeight: 500,
                mt: 2,
                color: "#251D58",
              }}
              variant="h6"
              component="div"
            ></Typography>
          </Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {showProducts.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default AllProduct; 
