import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/inside_cro@hotmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="7"
                placeholder="Your message"
              />
            </div>
            <div className="form-group mt-3">
              <input type="submit" value="Send" className="form-control" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
