import React, { Component } from "react";
import Service1 from "../../assets/images/service-1.png";

import "./index.css";

class ItemCard extends Component {
  state = {};
  render() {
    return (
      <div className="ic-container">
        <div className="ic-wrapper">
          <div className="ic-item-icon">
            <img src={this.props.icon} />
          </div>
          <div className="lc-content-wrapper">
            <p className="lc-content-heading">{this.props.heading}</p>
            <p className="lc-content-text">
              We create impactful digital experiences driven by insight,
              strategy.
            </p>
          </div>
        </div>
        <div className="ic-item-footer">
          <span>Learn More</span>
          <span>></span>
        </div>
      </div>
    );
  }
}

export default ItemCard;
