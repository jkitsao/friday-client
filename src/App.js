import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Onboard from "./pages/Onboard";
import Manage_page from "./pages/Manage";
import Project from "./pages/Project";
import Content_model from "./pages/Content_model";
import LandingPage from "./components/landingpage/LandingPage";
import initFirebase from "./firebase/initFirebase";
import { useUser } from "./firebase/useUser";

import { ChakraProvider } from "@chakra-ui/react";
initFirebase();

function App() {
  const { user, logout, loading } = useUser();
  useEffect(() => {
    console.log({ user, loading });
  }, [user]);

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
            <LandingPage />
          </Route>
          <Route exact path="/onboard">
            <Onboard />
          </Route>
          <Route exact path="/projects">
            <Manage_page />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/projects/:project_id" children={<Project />} />
          <Route
            path="/projects/:project_id/content_models/:model"
            children={<Content_model />}
          />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
