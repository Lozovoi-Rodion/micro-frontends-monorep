import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation, matchPath } from "react-router-dom";

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default function SidePanel() {
  const routeMatch = useRouteMatch(["/", "/layout-two"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs
      orientation="vertical"
      value={currentTab}
      aria-label="Vertical tabs example"
      textColor="secondary"
    >
      <Tab value="/" label="Home" to="/" component={Link} />
      <Tab value="/layout-two" label="Micro Frontend 2" to="/layout-two" component={Link} />
    </Tabs>
  );
}
