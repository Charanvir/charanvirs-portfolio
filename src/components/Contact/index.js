import React, { useState } from "react";
import validateEmail from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "user_name":
        setFormState({ ...formState, name: value });
        if (!value.length) {
          setErrorMessage("Name is required");
        } else {
          setErrorMessage("");
        }
        break;
      case "user_email":
        setFormState({ ...formState, email: value });
        const isValidEmail = validateEmail(value);
        if (!isValidEmail) {
          setErrorMessage("Email is invalid");
        } else {
          setErrorMessage("");
        }
        break;
      case "user_message":
        setFormState({ ...formState, message: value });
        if (!value.length) {
          setErrorMessage("Message is required");
        } else {
          setErrorMessage("");
        }
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formState.name && validateEmail(formState.email) && formState.message) {
      fetch("https://formspree.io/f/xjvdqava", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.ok) {
            setSubmissionStatus("Thanks for your submission!");
            setFormState({
              name: "",
              email: "",
              message: "",
            });
          } else {
            setSubmissionStatus("Something went wrong, please try again!");
          }
        })
        .catch((error) => {
          setSubmissionStatus("An error occurred, please try again later.");
          console.error("Error: ", error);
        });
    } else {
      setErrorMessage("Please fill out all fields correctly");
    }
  }

  return (
    <div className="container contactDiv">
      <h2 className="text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="row">
          <div>
            <label htmlFor="user_name">Name: </label>
          </div>
          <div>
            <input
              onChange={handleChange}
              value={formState.name}
              className="input"
              type="text"
              id="contactName"
              name="user_name"
              placeholder="Your name.."
            />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="user_email">Email: </label>
          </div>
          <div>
            <input
              onChange={handleChange}
              value={formState.email}
              className="input"
              type="text"
              id="contactEmail"
              name="user_email"
              placeholder="Your email.."
            />
          </div>
        </div>
        <div className="row">
          <div>
            <label htmlFor="user_message">Message: </label>
          </div>
          <div>
            <textarea
              onChange={handleChange}
              value={formState.message}
              id="contactMessage"
              name="user_message"
              placeholder="Your Message.."
              rows="5"
            />
          </div>
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        {submissionStatus && <div>{submissionStatus}</div>}
        <div>
          <input className="submitButton" type="submit" value="Submit" />
        </div>
      </form>
      <div className="mt-5">
        <p className="text-center">Email Me at: charanvir123@gmail.com</p>
        <p className="text-center">Call Me at: 647-239-2655</p>
      </div>
    </div>
  );
}

export default Contact;
