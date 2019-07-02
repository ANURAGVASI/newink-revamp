import React, { Component } from "react";
import ItemCard from "../../components/ItemCard";
import Service1 from "../../assets/images/service-1.png";
import Service2 from "../../assets/images/service-2.png";

import "./index.css";

class Services extends Component {
  state = {};
  render() {
    const servicesHeadings = [
      "Mobile Development",
      "Backend Development",
      "SEO Services"
    ];

    const servicesIcons = [Service1, Service1, Service2];

    return (
      <div className="se-wrapper">
        <div className="se-services-content">
          <p className="se-content-heading">What We Do Best</p>
          <div className="se-line" />
          <p className="se-content-text">
            We create impactful digital experiences driven by insight, strategy.
            impactful digital experiences driven by insight.
            {/* digital experiences driven by insight, strategy. */}
            {/* <br /> <br />
            impactful digital experiences driven by insight, We create impactful
            digital experiences driven by insight, strategy. */}
          </p>
          <p />
        </div>

        <div className="se-services-list">
          {servicesHeadings.map((heading, i) => (
            <ItemCard heading={heading} icon={servicesIcons[i]} />
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
