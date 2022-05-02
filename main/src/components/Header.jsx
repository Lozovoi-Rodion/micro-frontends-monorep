import React from "react";
import { createUseStyles } from "react-jss";
import { useLoggedIn } from "shell/auth";

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

  const loggedIn = useLoggedIn();

  return (
    <div className={classes.header}>
      {loggedIn ? "Hello Authorized user" : "This is micro-frontends demo app!"}
    </div>
  );
}
