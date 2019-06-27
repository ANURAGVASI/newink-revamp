import React, { Component } from "react";
import LoadingCircle from "../../components/LoadingCircle";
import Header from "../../components/Header";
import "./index.css";

class LandingPage extends Component {
  state = {
    isLoading: false
  };

  // function to animate the laoding circle
  animateCircle = () => {
    this.setState(() => ({
      isLoading: true
    }));
  };

  render() {
    console.log(this.state.isLoading);
    return (
      <div className="lp-wrapper">
        {/* <LoadingCircle loading={this.state.isLoading} /> */}
        {!this.state.isLoading ? (
          <React.Fragment>
            {" "}
            <Header />
            <div className="lp-content-wrapper">
              <div className="lp-content-left">
                <p className="lc-content-left-miantext">
                  Tranforming Businesses, and Experiences.
                </p>
                <div className="lc-line" />

                <div className="lc-content-left-contactus">
                  <button onClick={this.animateCircle}>Let's Talk</button>
                </div>
                <div className="lc-content-bottom">
                  <div className="lc-content-about">
                    <p className="lc-content-about-heading">About us</p>
                    <p className="lc-content-about-text">
                      We create impactful digital experiences driven by insight,
                      strategy. impactful digital experiences driven by insight,
                    </p>
                  </div>
                  <div className="lc-content-ourstory">
                    <p className="lc-content-about-heading">Our Story</p>
                    <p className="lc-content-about-text">
                      We create impactful digital experiences driven by insight,
                      strategy. impactful digital experiences driven by insight,
                    </p>
                  </div>
                </div>
              </div>
              <div className="lp-content-right" />
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default LandingPage;
