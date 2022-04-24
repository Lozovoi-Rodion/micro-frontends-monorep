import React from "react";
import ReactDOM from "react-dom";
import LayoutTwo from "./LayoutTwo";

const App = () => (
  <div className="container">
    <LayoutTwo />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
