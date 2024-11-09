import { Auth, onAuthStateChanged } from "firebase/auth";
import router from "next/router";

export const handleUserActivity = (auth) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      return user;
      // ...
    } else {
      // User is signed out
      // ...
      return {};
    }
  });
  return {};
};
