import { LinearProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductData,
  loadCategories,
  setProductAdded,
} from "../../../store/adminDashboard";
import "./AddProduct.css";

const AddProduct = () => {
  // const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  // Get Categoris from Store
  const allCategories = useSelector(
    (state) => state.entities.adminDashboard.categories.allCategories
  );

  const productAdded = useSelector(
    (state) => state.entities.adminDashboard.products.productAdded
  );
  // Load Categories from DB
  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let { category, name, description, image, price } = data;

    const formData = new FormData();
    formData.append("category", category);
    formData.append("name", name);
    formData.append("image", image[0]);
    formData.append("price", price);
    formData.append("description", description);

    // Send form data to Server
    dispatch(addProductData(formData));

    reset();
    // setLoader(true);
  };

  return (
    <div>
      <div className="form-container">
        {productAdded && (
          <div>
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              Product Added Successfully!
              <button
                onClick={() => dispatch(setProductAdded({ status: true }))}
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div>
              <button
                onClick={() => dispatch(setProductAdded({ status: false }))}
                // onClick={() => setLoader(false)}
                className="btn btn-success"
              >
                Add Another Product
              </button>
            </div>
          </div>
        )}

        {!productAdded && (
          <div>
            <div>
              <h2 className="mb-4">Insert Product Detail</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  {...register("category", { required: true })}
                >
                  <option>Select Category</option>
                  {allCategories.map((category) => (
                    <option key={category._id} value={category?.name}>
                      {category?.name}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span className="text-danger">Please select a category</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">Please enter a name</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter detail about product"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-danger">
                    Please enter a description
                  </span>
                )}
              </div>

              <div className="mt-4">
                <span className="mb-2 d-inline-block">Upload Image</span>
                <div class="input-group mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    class="form-control"
                    id="inputGroupFile02"
                    {...register("image", { required: true })}
                  />
                  <label class="input-group-text" htmlFor="inputGroupFile02">
                    Upload
                  </label>
                </div>
                {errors.image && (
                  <span className="text-danger">Please choose an image</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price in integer value"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-danger">Price is mandatory</span>
                )}
              </div>

              <input
                type="submit"
                className="btn btn-primary fw-bold"
                value="Add"
              />
            </form>

            {/* {loader && (
              <Stack
                sx={{ width: "100%", color: "grey.500", marginTop: "15px" }}
                spacing={2}
              >
                <LinearProgress color="success" />
              </Stack>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
