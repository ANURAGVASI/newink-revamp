import React, { Component } from "react";
import SuccessDialogImage from "../../assets/images/success_dilaog_custom_2.png";

import "./index.css";

class ConfirmationDialog extends Component {
  state = {};
  render() {
    return (
      <div className="cd-wrapper">
        <img className="cd-wrapper-background" src={SuccessDialogImage} />

        <div className="cd-status-icon-wrapper">
          <div className="cd-status-circle">
            <span className="cd-status-tick" />
          </div>
        </div>

        <div className="cd-content-wrapper">
          <span className="cd-maincontent">Mail Sent!</span>
          <span className="cd-subcontent">{`We were able to finish the game without crying your lungs out. Hella cool!`}</span>
          <button className="cd-continue-btn"> {`CONTINUE  >`} </button>
        </div>
      </div>
    );
  }
}

export default ConfirmationDialog;
