import React from "react";
import "./App.css";

import Nav from "./component/navbar";
import Home from "./component/home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <h4> druga linija </h4>
    </div>
  );
}

export default App;
