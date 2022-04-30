import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import MainLayout from "./MainLayout";

import "./index.css";

const App = () => (
  <BrowserRouter>
    <MainLayout />;
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
