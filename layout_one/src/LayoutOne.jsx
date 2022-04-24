import React from "react";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    "font-size": "2rem",
    margin: "auto",
    "max-width": "800px",
    border: "1px solid olive",
    "border-radius": "10px",
  },
});

export default function LayoutTwo() {
  const classes = useStyles();

  return <div className={classes.container}>Layout One</div>;
}
