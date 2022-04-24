import React, { Suspense } from "react";

import ErrorBoundary from "./ErrorBoundary";

const LayoutOne = React.lazy(() => import("layout_one/LayoutOne"));
const LayoutTwo = React.lazy(() => import("layout_two/LayoutTwo"));
import Header from 'shared/Header'

export default function MainLayout() {
    return (
        <>
          <div className="header">
            <ErrorBoundary>
              <Header />
            </ErrorBoundary>
          </div>
          <div className="container">
            <div className="sidepanel">SIDE PANEL</div>
            <div className="layout">
              <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary>
                  <LayoutOne />
                </ErrorBoundary>
              </Suspense>
            </div>
          </div>
        </>
      );
      
} 
