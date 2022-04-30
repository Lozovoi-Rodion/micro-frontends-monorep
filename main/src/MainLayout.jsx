import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const LayoutOne = React.lazy(() => import("layout_one/LayoutOne"));
const LayoutTwo = React.lazy(() => import("layout_two/LayoutTwo"));
import Header from "./components/Header";

const renderMFE = (MFE) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <MFE />
      </ErrorBoundary>
    </Suspense>
  );
};

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="sidepanel">SIDE PANEL</div>
        <div className="layout">
          <Routes>
            <Route exact path="/" element={renderMFE(LayoutOne)} />
            <Route exact path="/layout-two" element={renderMFE(LayoutTwo)} />
          </Routes>
        </div>
      </div>
    </>
  );
}
