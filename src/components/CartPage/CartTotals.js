import React from "react";
import { ProductConsumer } from "../../context";

export default function CartTotals() {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTotal, cartTax } = value;

            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <h5 className="font-weight-lighter mt-2">
                  Subtotal: ${cartSubTotal}
                </h5>
                <h5 className="font-weight-lighter">Tax: ${cartTax}</h5>

                <h3 className="text-uppercase font-weight-bold">
                  Total: ${cartTotal}
                </h3>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
