import React from "react";
import ReactDOM from "react-dom";

import Microparte from "./Microparte";
import "./index.css";

const App = () => (
  <div className="container">
      <Microparte />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
