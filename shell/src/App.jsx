import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import MainLayout from "main/MainLayout";

const App = () => <MainLayout />;
ReactDOM.render(<App />, document.getElementById("app"));
