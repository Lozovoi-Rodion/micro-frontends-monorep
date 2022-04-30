import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    "font-size": "3.5rem",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>This is micro-frontends demo app!</div>
  );
}
