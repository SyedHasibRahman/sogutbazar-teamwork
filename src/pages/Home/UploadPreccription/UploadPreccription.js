import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { makeStyles } from "@mui/styles";

const UploadPreccription = () => {
  const useStyle = makeStyles({
    numIcon: {
      border: "2px solid #11827d",
      color: "green",
      borderRadius: "50%",
      paddingLeft: "5px",
      paddingRight: "5px",
      paddingTop: "2px",
      paddingBottom: "2px",
      marginRight: "5px",
    },
  });

  const { numIcon } = useStyle();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { image } = data;
    const precriptionData = {
      image,
    };
    console.log(precriptionData);

    if (true) {
      Swal.fire("Good job!", "Preccription Uploaded Successfully", "success");
      reset();
    }
  };
  return (
    <div className="my-5">
      <div
        className="container"
        style={ {
          backgroundColor: "lightgreen",
          borderRadius: "15px",
          padding: "20px",
        } }
      >
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <form onSubmit={ handleSubmit(onSubmit) }>
              <div className="mt-4">
                <span
                  style={ { color: "#333", fontSize: "30px" } }
                  className="mb-2 d-inline-block fw-bold"
                >
                  Upload Your Products List
                </span>
                <div className="input-group mb-4">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    { ...register("image", { required: true }) }
                  />
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupFile02"
                  >
                    <button className="btn-success">Upload</button>
                  </label>
                </div>
                { errors.image && (
                  <span className="text-danger">Please choose an image</span>
                ) }
              </div>
            </form>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <h2>আপনি অর্ডার কিভাবে করবেন?</h2>
            <p style={ { marginTop: "10px" } }>
              <span className={ numIcon }>১</span>
              প্রথমে আপনার দরকারি প্রোডাক্ট লিস্টের ছবি আপলোড করুন।
            </p>
            <p>
              <span className={ numIcon }>২</span>আমাদের একটিভ টিম আপনাকে ফোন
              করে অর্ডার কনফার্ম করবেন।
            </p>
            <p>
              <span className={ numIcon }>৩</span>৬-৮ ঘন্টার মধ্য আপনার ডেলিভারি
              বুঝে নিন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPreccription;
