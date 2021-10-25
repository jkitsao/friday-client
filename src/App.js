import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Onboard from "./pages/Onboard";
import Manage_page from "./pages/Manage";
import Project from "./pages/Project";
import Content_model from "./pages/Content_model";
import LandingPage from "./components/landingpage/LandingPage";
import initFirebase from "./firebase/initFirebase";
import { useUser } from "./firebase/useUser";
// import Head from ''

import { ChakraProvider } from "@chakra-ui/react";
import LoadingComp from "./components/LoadingComp";
initFirebase();

function App() {
  const { user, loadingState } = useUser();

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
              <PrivateRoute
                component={Manage_page}
                user={user}
                loadingState={loadingState}
              />
            </Route>
            <Route exact path="/auth">
              <Auth />
            </Route>
            <Route exact path="/projects/:project_id">
              {loadingState ? (
                <PrivateRoute
                  component={Project}
                  user={user}
                  loadingState={loadingState}
                />
              ) : (
                <div className="h-full min-h-screen flex justify-center items-center bg-gray-800 bg-opacity-30">
                  <LoadingComp />
                </div>
              )}
            </Route>
            <Route path="/projects/:project_id/content_models/:model">
            {loadingState ? (

              <PrivateRoute
                component={Content_model}
                user={user}
                loadingState={loadingState}
              />
              ) : (
                <div className="h-full min-h-screen flex justify-center items-center bg-gray-800 bg-opacity-30">
                  <LoadingComp />
                </div>
              )}
            </Route>
          </Switch>
        </Router>
    
    </ChakraProvider>
  );
}

function PrivateRoute({ loadingState, user, component: Component, ...rest }) {
  // console.log({ kjkjkjk: user });
  // <Component {...props} />;

  return (
    <Route
      {...rest}
      render={(props) =>
        loadingState === "none" && !user ? (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default App;
