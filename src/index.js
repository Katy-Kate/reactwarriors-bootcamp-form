import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/index.css";
import Store from "./store/store.js";
import { Provider } from "mobx-react";
const formStore = new Store();

ReactDOM.render(
  <Provider formStore={formStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
