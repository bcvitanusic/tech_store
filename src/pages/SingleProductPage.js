import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context";

export default function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductImg} title="single product" />
      <ProductConsumer>
        {(value) => {
          const { singleProduct, addToCart, loading } = value;

          if (loading) {
            console.log("Hello from loading");
            return <h1>product loading...</h1>;
          }

          const {
            company,
            description,
            id,
            price,
            title,
            image,
          } = singleProduct;

          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm8 col-md-6 my-3">
                    <img
                      src={`../${image}`}
                      className="img-fluid"
                      alt="Product"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm8 col-md-6 my-3">
                    <h5 className="text-title mb-4">{title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      Brand: {company}
                    </h5>

                    <p className="text-capitalize text-title mt-3">
                      Some info about product:
                    </p>
                    <p>{description}</p>
                    <h5 className="text-main text-capitalize mb-4 font-weight-bolder">
                      Price: ${price}
                    </h5>
                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: "0.7rem" }}
                      onClick={() => addToCart(id)}
                    >
                      Add to cart
                    </button>

                    <Link
                      to="/products"
                      className="main-link"
                      style={{ margin: "0.7rem" }}
                    >
                      Back to products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
