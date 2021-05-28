import React from "react";

export const AuthContext = React.createContext();

export const initialAuthState = {
  auth: "",
  user: null
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "admin":
      return {
        ...state,
        auth: "admin"
        // user: action.payload.user
      };
    case "user":
      return {
        ...state,
        auth: "user"
        // user: action.payload.user
      };
    default:
      return state;
  }
  // switch (action.type) {
  //   case "LOGIN":
  //     localStorage.setItem("user", JSON.stringify(action.payload.user));
  //     localStorage.setItem("token", JSON.stringify(action.payload.token));
  //     return {
  //       ...state,
  //       isAuthenticated: true,
  //       user: action.payload.user,
  //       token: action.payload.token
  //     };
  //   case "LOGOUT":
  //     localStorage.clear();
  //     return {
  //       ...state,
  //       isAuthenticated: false,
  //       user: null
  //     };
  //   default:
  //     return state;
  // }
};
