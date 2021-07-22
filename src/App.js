import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Onboard from "./pages/Onboard";
import Manage_page from "./pages/Manage";
import Project from "./pages/Project";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/onboard">
            <Onboard />
          </Route>
          <Route exact path="/manage">
            <Manage_page />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route path="/manage/:project_id" children={<Project />} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
