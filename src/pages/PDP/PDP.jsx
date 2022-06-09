import React, { Component } from "react";
import Header from "../../components/forHome/header/Header";
import "./pdp.scss";
import shirt from "../../assets/shirt.png";
export default class PDP extends Component {
  render() {
    return (
      <div className="APP">
        <Header />
        <main>
          <div className="pdp-wrap">
            <div className="pdp-left">
              <div>
                <img
                  style={{ width: "79px", height: "80px" }}
                  src={shirt}
                  alt="item"
                />
              </div>
              <div>
                <img
                  style={{ width: "79px", height: "80px" }}
                  src={shirt}
                  alt="item"
                />
              </div>

              <div>
                <img
                  style={{ width: "79px", height: "80px" }}
                  src={shirt}
                  alt="item"
                />
              </div>
            </div>

            <div className="pdp-middle">
              <img
                style={{ width: "610px", height: "511px" }}
                src={shirt}
                alt="shirt"
              />
            </div>

            <div className="pdp-right">
              <div className="desc">
                <h1>Appolo</h1>
                <h2>running short</h2>
              </div>

              <div className="desc-midd">
                <h1>size:</h1>
                <div className="xs">
                  <span>XS</span>
                </div>
                <div className="s">
                  <span>S</span>
                </div>
                <div className="M">
                  <span>M</span>
                </div>
                <div className="L">
                  <span>L</span>
                </div>

                <div className="price">
                  <h1>Price</h1>
                  <h2>$50.00</h2>
                  <button>ADD TO CART</button>
                </div>

                <div className="desc-bottom">
                  <p>
                    Find stunning women's cocktail dresses and party dresses.
                    Stand out in lace and metallic cocktail dresses and party
                    dresses from all your favorite brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}