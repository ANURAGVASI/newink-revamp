import React, { Component } from "react";

import "./index.css";
class LoadingCircle extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="lc-border"
          className={`lc-wrapper lc-border ${
            this.props.loading ? "lc-move-around" : ""
          } `}
        >
          <div className="lc-inner" />
        </div>
        {/* <button onClick={this.startAnimationCirle}>move</button> */}
      </React.Fragment>
    );
  }
}

export default LoadingCircle;
