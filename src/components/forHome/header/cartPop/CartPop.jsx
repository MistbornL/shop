import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../../../../pages/Cart/cartITem/CartItem";
import "./cartpop.scss";
export const CartPop = () => {
  const cartData = useSelector((state) => state.store.cart);
  return (
    <div className="cart-pop-wrapper">
      <h1>My Bag</h1>

      <section></section>
      <div className="cart-bottom">
        <Link to={"/cart"}>
          <button>VIEW BAG</button>
        </Link>
        <button>CHECK OUT</button>
      </div>
    </div>
  );
};
