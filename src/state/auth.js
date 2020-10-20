// store.js
import React, { createContext } from "react";
import * as firebase from "firebase";
const initialState = {
  currentUser: null,
  uid: null,
};
const auth = createContext(initialState);

const authReducer = (state, action) => {
  // let stateCopy = { ...state };
  switch (action.type) {
    case "SIGN_IN":
      return { currentUser: action.currentUser, uid: action.uid };
    case "SIGN_OUT":
      return { currentUser: null, uid: null };
    default:
      return state;
  }
};

export { auth, authReducer };
