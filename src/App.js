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

import { ChakraProvider } from "@chakra-ui/react";
initFirebase();

function App() {
  const { user, loadingState } = useUser();

  return (
    <ChakraProvider>
      {loadingState && (
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
              <PrivateRoute
                component={Project}
                user={user}
                loadingState={loadingState}
              />
            </Route>
            <Route path="/projects/:project_id/content_models/:model">
              <PrivateRoute
                component={Content_model}
                user={user}
                loadingState={loadingState}
              />
            </Route>
          </Switch>
        </Router>
      )}
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
