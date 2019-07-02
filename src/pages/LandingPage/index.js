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
        {/* Left Social icons sections */}
        {/* <div className="lp-social-wrapper">
          <i class="fa fa-twitter" aria-hidden="true" />
          <i class="fa fa-facebook" aria-hidden="true" />
          <i class="fa fa-pinterest-p" aria-hidden="true" />
          <i class="fa fa-slack" aria-hidden="true" />
        </div> */}
        {/* <div className="lp-content-container"> */}{" "}
        {/* <LoadingCircle loading={this.state.isLoading} /> */}
        {!this.state.isLoading ? (
          <React.Fragment>
            {" "}
            <Header />
            <div className="lp-content-wrapper">
              <div className="lp-content-left">
                <p className="lp-content-left-miantext">
                  Tranforming Businesses, and Experiences.
                </p>
                <div className="lp-line" />

                <div className="lp-content-left-contactus">
                  <button onClick={this.animateCircle}>Let's Talk</button>
                </div>
                <div className="lp-content-bottom">
                  <div className="lp-content-about">
                    <p className="lp-content-about-heading">About us</p>
                    <p className="lp-content-about-text">
                      We create impactful digital experiences driven by insight,
                      strategy. impactful digital experiences driven by insight,
                    </p>
                  </div>
                  <div className="lp-content-ourstory">
                    <p className="lp-content-about-heading">Our Story</p>
                    <p className="lp-content-about-text">
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
        {/* </div> */}
      </div>
    );
  }
}

export default LandingPage;
