import express from "express";
import cors from "cors";
import serialize from "serialize-javascript";

import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import routes from "../shared/routes";
import colors from 'colors';
import configureStore from "../shared/store";
import App from "../shared/app";
import bodyParser from 'body-parser';
import * as db from "./services/db";
import { env } from "../shared/utils/env"

const app = express();
const host = process.env.HOST || env.host;
const port = process.env.PORT || env.port;

app.use(cors());
app.use(express.static("build"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.json()) //support JSON-encoded bodies
app.use(express.urlencoded()) //support URL-encoded bodies

app.get("/api/cars/list", (req, res) => {
  res.json(db.getAllCars());
});

app.get("/api/cars", (req, res) => {
  let key = req.query["key"];
  let value = req.query["value"];
  res.json(db.findAllCars(key, value));
});

app.post("/api/cars", (req, res) => {
  //print the results to `stdout`
  let host = req.get('host');
  if (host.indexOf("test.com")) {
    console.log("save to db and print");
  } else {
    console.log("save to db only");
  }
  
  let car = {
    "brand": req.body.brand,
    "name": req.body.name,
    "price": req.body.price,
    "drive": req.body.drive,
    "imageUrl": req.body.image
  }
  res.json(db.save(car));
});

app.get("*", (req, res, next) => {
  const store = configureStore();
  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      acc.push(
        Promise.resolve(
          store.dispatch(route.component.initialAction())
        )
      );
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );
      const initialData = store.getState();
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="description" content="Qantas - Test">
            <meta name="author" content="Oscar Liang">
            <meta name="keyword" content="Bootstrap,Admin,Template,Open,Source,React,jQuery,CSS,HTML,Dashboard">
            <title>Qantas - Test</title>
            <link rel="stylesheet" href="/index.styles.css">
            <link rel="stylesheet" href="/index.vendor.css">
            <script src="/index.bundle.js" defer></script>
            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>

          <body class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden">
            <div id="root">${markup}</div>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🤷‍♂️  Server listening on ` + `http://${host}:${port}`.blue);
});