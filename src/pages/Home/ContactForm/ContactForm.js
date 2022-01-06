import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34qhcuj",
        "template_t88knlv",
        form.current,
        "user_xQ2aTrW3Jba3Qhnj7eftS"
      )
      .then(
        (result) => {
          Swal.fire("Good job!", "Message Send Successfully!", "success");
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        }
      );
    e.target.reset();
  };
  return (
    <div className="bg-info text-light my-5">
      <div className="container py-5">
        <div>
          <h2 className="text-center text-light">Contact Us</h2>
        </div>
        <form ref={ form } onSubmit={ sendEmail }>
          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Full name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Mobile Number"
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  placeholder="What's on your mind?"
                  id="message"
                  name="message"
                  rows="6"
                ></textarea>
              </div>
              <div>
                <button
                  style={ { fontSize: "1rem", textTransform: "capitalize" } }
                  className="btn btn-primary"
                  type="submit"
                  value="Send Now"
                >
                  Send Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
