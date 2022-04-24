import React from "react";
import ReactDOM from "react-dom";

import LayoutOne from "./LayoutOne";

const App = () => (
  <div className="container">
    <LayoutOne />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
