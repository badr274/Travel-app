import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as BR } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import Translate from "./translation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BR>
      {/* <Routes> */}
      {/* <Translate> */}
      <App />
      {/* </Translate> */}
      {/* </Routes> */}
    </BR>
  </React.StrictMode>
);
