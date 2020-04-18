import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--darkGrey" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3 ml-3">
            <Title title="about us" />
            <p className="text-lead y-3 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              laborum quibusdam perspiciatis facere soluta doloribus obcaecati
              rem laudantium, libero debitis. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Iure laborum quibusdam perspiciatis
              facere soluta doloribus obcaecati rem laudantium, libero debitis.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              More info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
