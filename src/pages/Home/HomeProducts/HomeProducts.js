import { Box } from "@mui/material";
import React from "react";
import BabyProducts from "./BabyProducts";
import HerbalProducts from "./HerbalProducts";

const HomeProducts = () => {
  return (
    <Box>
      <BabyProducts />
      <HerbalProducts />
    </Box>
  );
};

export default HomeProducts;
