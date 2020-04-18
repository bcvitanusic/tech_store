import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";

export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem,
}) {
  const { id, title, price, count, total, image } = cartItem;

  return (
    <div className="row mt-3 mt-lg-0 text-capitalize text-center align-items-center">
      {/*Image*/}
      <div className="col-10 mx-auto col-lg-2 pb-2 cart-icon">
        <img src={image} width="60" alt="product" className="img-fluid" />
      </div>
      {/* end of Image*/}
      {/*Title*/}
      <div className="col-10 mx-auto col-lg-2 pb-2 font-weight-bold">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      {/* end of Title*/}
      {/*Price*/}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Price: </span>${price}
      </div>
      {/* end of Price*/}
      {/*count*/}

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown
              className="text-primary cart-icon"
              onClick={() => decrement(id)}
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp
              className="text-primary cart-icon"
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      {/* end of count*/}
      {/*Remove*/}
      <div className="col-10 mx-auto col-lg-2">
        <FaTrash
          className="text-danger cart-icon"
          onClick={() => removeItem(id)}
        />
      </div>
      {/* end of Remove*/}
      {/*Total*/}
      <div className="col-10 mx-auto col-lg-2">
        <strong className="text-muted">Item total: ${total}</strong>
      </div>
      {/* end of Total*/}
    </div>
  );
}
