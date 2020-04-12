import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import ProjectPage from "./components/Projects";
import FirevisorPage from "./components/Firevisor";
import WhizzPage from "./components/Whizz";
import "./App.css";

function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        Learn React
      </header>
    </div>
  );
}

function AppRouter() {
  return (
    <React.Fragment>
    <NavBar />
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/navbar" exact component={NavBar} />
        <Route path="/projects" exact component={ProjectPage} />
        <Route path="/firevisor" exact component={FirevisorPage} />
        <Route path="/whizz" exact component={WhizzPage} />
      </div>
    </Router>
    </React.Fragment>
  );
}

export default AppRouter;
