window.jQuery = window.$ = require("jquery");
window._ = require("lodash");

import "../../public/css/font-awesome.css";
import "../../public/css/glyphicons.css";
import "../../public/css/glyphicons-social.css";
import "../../public/css/simple-line-icons.css";

import "core-js/es6/promise";
import "jquery-ui-npm/jquery-ui.min.js";

import React from "react";
import { hydrate } from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../shared/app";
import configureStore from '../shared/store'
import createBrowserHistory from 'history/createBrowserHistory'

const store = configureStore(window.__initialData__);
const history = createBrowserHistory()
const rootElement = document.getElementById("root");

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  rootElement
);
