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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
      if (user) {
        setLoading(false);
        const userData = mapUserData(user);
        setUserCookie(userData);
        setUser(userData);
      } else {
        setLoading(false);
        removeUserCookie();
        setUser();
      }
    });

    const userFromCookie = getUserFromCookie();
    // if (!userFromCookie) {
    //   router.push("/");
    //   return;
    // }
    setLoading(false);
    setUser(userFromCookie);

    return () => {
      cancelAuthListener();
    };
  }, []);

  return { user, logout, loading };
};

export { useUser };
