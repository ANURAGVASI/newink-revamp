import React, { Component } from "react";
import ConfirmationDialog from "./components/ConfirmationDilaog";
import LoadingCircle from "./components/LoadingCircle";
import LandingPage from "./pages/LandingPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LandingPage />
      </React.Fragment>
    );
  }
}

export default App;
