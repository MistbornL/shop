import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment } from "../../../../state/reducer";
import "./cartpop.scss";

export const CartPop = ({ cartRef }) => {
  const cartData = useSelector((state) => state.store.cart);
  const selectedCurrencies = useSelector(
    (state) => state.store.selectedCurrencies
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div ref={cartRef} className="cart-pop-wrapper">
        <div>
          <h1>
            My Bag, <span>{cartData.length} items</span>
          </h1>
        </div>

        {cartData.map((item, index) => {
          return (
            <section
              key={index}
              style={{ position: "relative", height: "180px" }}
            >
              <div className="card-pop-top">
                <h2>{item.name}</h2>
                {item.prices.map((price) => {
                  if (price.currency.symbol === selectedCurrencies) {
                    return (
                      <h1>
                        {price.currency.symbol}
                        {price.amount}
                      </h1>
                    );
                  }
                  return undefined;
                })}
              </div>
              {item.attributes.map((sizeItem, index) => {
                if (sizeItem.name === "Size") {
                  return <p key={index}>Size</p>;
                } else if (sizeItem.name === "Capacity") {
                  return <p key={index}>Capacity</p>;
                } else {
                  return null;
                }
              })}
              <div className="cart-size">
                {item.attributes.map((sizeItem) => {
                  if (sizeItem.name === "Size") {
                    return sizeItem.items.map((size, index) => {
                      return (
                        <Fragment key={index}>
                          <div>{size.value} </div>
                        </Fragment>
                      );
                    });
                  } else if (sizeItem.name === "Capacity") {
                    return sizeItem.items.map((cap, index) => {
                      return (
                        <Fragment key={index}>
                          <div className="size">
                            <div>{cap.value} </div>
                          </div>
                        </Fragment>
                      );
                    });
                  }

                  return undefined;
                })}
              </div>

              {item.attributes.map((colorItem) => {
                if (colorItem.name === "Color") {
                  return <p>color</p>;
                } else {
                  return null;
                }
              })}

              <div className="cart-color">
                {item.attributes.map((colorItems) => {
                  if (colorItems.name === "Color") {
                    return colorItems.items.map((color, index) => {
                      const colorValue = color.value;
                      return (
                        <div
                          key={index}
                          style={{ background: colorValue }}
                        ></div>
                      );
                    });
                  }
                  return undefined;
                })}
              </div>
              <div className="cart-pop-right">
                <div className="counter">
                  <button
                    onClick={() => {
                      dispatch(increment(item));
                    }}
                  >
                    +
                  </button>
                  <span>{item.count}</span>
                  <button
                    onClick={() => {
                      dispatch(decrement(item));
                    }}
                  >
                    -
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                  }}
                >
                  <img
                    style={{ width: "121px", height: "190px" }}
                    src={item.gallery[0]}
                    alt={item.name}
                  />
                </div>
              </div>
            </section>
          );
        })}

        <div className="cart-bottom">
          <Link to={"/cart"}>
            <button>VIEW BAG</button>
          </Link>
          <button style={{ background: "#5ECE7B", color: "white" }}>
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
};
