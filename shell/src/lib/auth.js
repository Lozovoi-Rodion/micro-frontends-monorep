import React, { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const AUTH_SERVER = "http://localhost:3017";

export const jwt = new BehaviorSubject(null);

export const signin = (email, password) =>
  fetch(`${AUTH_SERVER}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      jwt.next(data.access_token);
      return data.access_token;
    });

export const signup = (email, password) =>
  fetch(`${AUTH_SERVER}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      jwt.next(data.access_token);
      return data.access_token;
    });

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    return jwt.subscribe((c) => {
      setLoggedIn(!!jwt.value);
    });
  }, []);
  return loggedIn;
}
