import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import Login from "./login.jsx";
import QueLibrary from "./que-library.jsx";
import AddQue from "./add-que.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/question-library" component={QueLibrary} />
          <Route path="/add-question" component={AddQue} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
