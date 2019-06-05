import React from "react";
import ReactDom from "react-dom";

import Header from "./components/common/Header";
import List from "./components/list/List";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
