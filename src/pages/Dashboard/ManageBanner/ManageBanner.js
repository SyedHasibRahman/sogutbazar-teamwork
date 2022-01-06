import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addBannerToDB,
  loadBanners,
  setBannerAdded,
} from "../../../store/adminDashboard";
import SingleBanner from "./SingleBanner";

const ManageBanner = () => {
  const dispatch = useDispatch();
  // Getting banners from store
  const banners = useSelector(
    (state) => state.entities.adminDashboard.banners.allBanner
  );
  const bannerAdded = useSelector(
    (state) => state.entities.adminDashboard.banners.bannreAdded
  );


  // Display success message for 5 seconds
  setTimeout(() => {
    dispatch(setBannerAdded({ status: false }));
  }, 5000);


  let slideNumber = 0;

  // Load Banners from Database
  useEffect(() => {
    dispatch(loadBanners());
  }, [bannerAdded]);

  // React Hook Form for add a slide
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { title, description, image } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image[0]);

    // Send banner data to DB
    dispatch(addBannerToDB(formData));

    reset();
  };

  return (
    <div>
      <div className="mb-4 text-center">
        <h2 className="text-center">Manage Slides</h2>
        <h3 className="text-center">Coming Soon!</h3><br /><br />

        <img src="https://i.ibb.co/VVF0sQq/timer.gif" alt="" />
      </div>
    </div>
  );
};

export default ManageBanner;
