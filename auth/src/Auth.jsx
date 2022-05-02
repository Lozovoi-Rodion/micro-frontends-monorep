import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const AuthHome = () => <div className="auth-home">Authorization MF</div>;

export default function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Auth Home" value="1" />
            <Tab label="Sign In" value="2" />
            <Tab label="Sign Up" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AuthHome />
        </TabPanel>
        <TabPanel value="2">
          <Signin />
        </TabPanel>
        <TabPanel value="3">
          <Signup />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
