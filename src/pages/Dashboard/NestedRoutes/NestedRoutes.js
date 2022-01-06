import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageBanner from "../ManageBanner/ManageBanner";
import MyOrders from "../MyOrders/MyOrders";

import ManageProducts from "../ManageProducts/ManageProducts";
import Review from "../Review/Review";
import ManageCatagories from "../ManageCatagories/ManageCatagories";
import ManageUsers from "../ManageUsers/ManageUsers";
import AdminRoute from "../AdminRoute/AdminRoute";

const NestedRoutes = () => {
  return (
    <Box>
      {/* Admin Routes */}
      <Routes>
        <Route
          path="add-product"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="manage-banner"
          element={
            <AdminRoute>
              <ManageBanner />
            </AdminRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="manage-product"
          element={
            <AdminRoute>
              <ManageProducts />
            </AdminRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="make-admin"
          element={
            <AdminRoute>
              <MakeAdmin />
            </AdminRoute>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="manage-users"
          element={
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          }
        />
      </Routes>
      <Routes>
        <Route path="my-orders" element={<MyOrders />} />
      </Routes>
      <Routes>
        <Route path="review" element={<Review />} />
      </Routes>
      <Routes>
        <Route
          path="manage-catagory"
          element={
            <AdminRoute>
              <ManageCatagories />
            </AdminRoute>
          }
        />
      </Routes>
    </Box>
  );
};

export default NestedRoutes;
