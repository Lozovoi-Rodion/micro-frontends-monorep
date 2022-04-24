import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function SidePanel() {
    const 
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: "divider" }}
    >
        <Tab>
            First tab
        </Tab>
        <Tab>
            Second tab
        </Tab>
        <Tab>
            Third tab
        </Tab>
    </Tabs>
  );
}
