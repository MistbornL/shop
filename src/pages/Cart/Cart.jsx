import Header from "../../components/forHome/header/Header";
import "./cart.scss";
import React, { Fragment } from "react";
import { CartItem } from "./cartITem/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.store.cart);
  console.log(cartData);
  var tax = 0;
  var total = 0;
  cartData.map((item) => {
    return (tax += Math.round(
      item.prices[0].amount * item.count * 0.21,
      (total += Math.round(item.prices[0].amount * item.count + tax))
    ));
  });

  return (
    <div className="App">
      <Header />
      <h1 className="cart-head">cart</h1>
      {cartData.length > 0 ? (
        <Fragment>
          {" "}
          <div className="section-wrapper">
            {cartData.map((item) => {
              return <CartItem item={item} />;
            })}
          </div>
        </Fragment>
      ) : null}
      <div className="cart-footer">
        <p>
          Tax 21%: <strong>{tax}$</strong>
        </p>

        <p>
          Quantity:{" "}
          <strong>
            {cartData.reduce((prev, item) => prev + item.count, 0)}
          </strong>
        </p>

        <p>
          total: <strong>{total}$</strong>
        </p>
      </div>
    </div>
  );
};

export default Cart;
