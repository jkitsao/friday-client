import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../firebase/initFirebase";
// import axios from "axios";
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from "./userCookies";
import { mapUserData } from "./mapUserData";

initFirebase();

const useUser = () => {
  const [user, setUser] = useState();
  const [loadingState, setLoadingState] = useState(false);
  let history = useHistory();
  // const [userDetails, setUserDetails] = useState(null);
  // const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        history.push("/auth");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
      // setLoading(true);
      if (user) {
        setLoadingState("user");
        const userData = mapUserData(user);
        setUserCookie(userData);
        setUser(userData);
      } else {
        setLoadingState("none");
        removeUserCookie();
        setUser();
      }
    });

    const userFromCookie = getUserFromCookie();
    // if (!userFromCookie) {
    //   router.push("/");
    //   return;
    // }
    // setLoading(false);
    setUser(userFromCookie);

    return () => {
      cancelAuthListener();
    };
  }, []);

  return { user, logout, loadingState };
};

export { useUser };
