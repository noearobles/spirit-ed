import React from "react";
import emailjs from "emailjs-com";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

export default function Newsletter() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uh7gkbr",
        "template_qjbr5zf",
        e.target,
        "-pnSiBCZBGjKWNGse"
      )
      .then(
        (result) => {
          alert("Message Sent");
        },
        (error) => {
          alert("Message could not be sent");
        }
      );
  }

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading" style={{ paddingTop: "50px" }}>
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant">Get In Touch</h1>
        <p className="p__opensans"></p>
      </div>
      <div className="app__newsletter-input flex__center contact">
        <form onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Name" />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email" />
          <label>Message</label>
          <textarea name="user_project" placeholder="Message" />
          <input
            type="submit"
            className="custom__button"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
}
