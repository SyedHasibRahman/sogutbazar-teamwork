import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../../hooks/useAuth";
import ReactStars from "react-rating-stars-component";
import { savedReview, setReviewSubmitedStatus } from "../../../store/userDashboard";

const Review = () => {
  const { user } = useAuth();

  const dispatch = useDispatch();

  // Get current review submitted status from store
  const reviewSubmited = useSelector(
    (state) => state.entities.userDashboard.reviewSubmited
  );

  const [rating, setRating] = useState(null);

  // Haqndle Rating
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const review = {
      name: user.displayName,
      image: user.photoURL,
      rating: rating,
      feedback: data.review,
    };

    dispatch(savedReview(review));
  };

  return (
    <div className="mt-4 container" style={style.reviewContainer}>
      <div className="login-form border rounded">
        {reviewSubmited && (
          <div>
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              Review Submited.
              <button
                onClick={() =>
                  dispatch(setReviewSubmitedStatus({ state: true }))
                }
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div>
              <button
                onClick={() =>
                  dispatch(setReviewSubmitedStatus({ state: false }))
                }
                className="btn btn-success"
              >
                Write Another Review
              </button>
            </div>
          </div>
        )}

        {!reviewSubmited && (
          <div>
            <div>
              <h2 className="h3 mb-4">Write a Review</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <ReactStars
                  count={5}
                  size={24}
                  onChange={ratingChanged}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="rgb(250, 202, 81)"
                />
              </div>

              <div className="mb-3">
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  className="form-control"
                  {...register("review", { required: true })}
                />
                {errors.review && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <input
                type="submit"
                className="btn btn-primary fw-bold"
                value="Submit"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;

const style = {
  reviewContainer: {
    // /* width: 600px; */
    minHeight: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
};
