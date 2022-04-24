import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <>
    <div className="header">
      I AM HEADER
    </div>
    <div className="container">
      <div className="sidepanel">
        SIDE PANEL
      </div>
      <div className="layout">
        Layout
      </div>
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
