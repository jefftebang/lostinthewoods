import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.css";

import Main from "./Main";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
  // <React.StrictMode>
  <Main />,
  // </React.StrictMode>,
  document.getElementById("root")
);
