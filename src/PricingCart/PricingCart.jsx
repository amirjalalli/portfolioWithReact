import "./PricingCart.css";
import React from "react";
import { Link } from "react-router-dom";

function PricingCart() {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- basic -</h3>
          <span className="bar">bar</span>
          <p className="btc">$100</p>
          <p> - 3Days -</p>
          <p> - 3Pages -</p>
          <p> - featured -</p>
          <p> - Responsive Design -</p>
          <Link to="/contact" className="btn">
            PRUVASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>- basic -</h3>
          <span className="bar">bar</span>
          <p className="btc">$200</p>
          <p> - 3Days -</p>
          <p> - 3Pages -</p>
          <p> - featured -</p>
          <p> - Responsive Design -</p>
          <Link to="/contact" className="btn">
            PRUVASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>- basic -</h3>
          <span className="bar">bar</span>
          <p className="btc">$300</p>
          <p> - 3Days -</p>
          <p> - 3Pages -</p>
          <p> - featured -</p>
          <p> - Responsive Design -</p>
          <Link to="/contact" className="btn">
            PRUVASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingCart;
