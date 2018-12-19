import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/index.css";
import Store from "./Store/Store.js";
import { Provider } from "mobx-react";
const formStore = new Store();

ReactDOM.render(
  <Provider formStore={formStore} hello={1}>
    <App />
  </Provider>,
  document.getElementById("root")
);
