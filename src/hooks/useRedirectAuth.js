import React, { useState, useEffect } from "react";
// import axios from "axios";
import api from "../api/axios";
function useRedirectAuth(user) {
  useEffect(() => {
    api
      .get("/onboard", user.id)
      .then((res) => {
        alert(res.data.success);
      })
      .catch((err) => alert(err));
  }, []);
}

export default useRedirectAuth;
