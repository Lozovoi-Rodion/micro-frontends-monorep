import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const Auth = React.lazy(()=>import("auth/Auth"))
const LayoutOne = React.lazy(() => import("layout_one/LayoutOne"));
const LayoutTwo = React.lazy(() => import("layout_two/LayoutTwo"));
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";

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
        <div className="sidepanel">
          <SidePanel />
        </div>
        <div className="layout">
          <Routes>
            <Route exact path="/" element={renderMFE(Auth)} />
            <Route exact path="/layout-one" element={renderMFE(LayoutOne)} />
            <Route exact path="/layout-two" element={renderMFE(LayoutTwo)} />
          </Routes>
        </div>
      </div>
    </>
  );
}
