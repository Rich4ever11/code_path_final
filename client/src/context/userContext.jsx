import { createContext, useContext, useEffect, useState } from "react";
// import UserContext from "./UserContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../util/firebaseConfig";
import userAPI from "../api/userAPI";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const auth = getAuth(app);

  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  //Check if the user is logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initUser);
    return unsubscribe;
  }, []);

  async function initUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      if (userDetails === null) {
        console.log(user);
        const user_details = await userAPI.getUserDetails({
          firebase_id: user.uid,
        });
        setUserDetails(user_details[0]);
      }
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoggedIn,
    userDetails,
    loading,
    initUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function UseUserContext() {
  return useContext(UserContext);
}
