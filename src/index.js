import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
// To make async await syntax work
import "babel-polyfill";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  // Some logic to initialize and load data into the store
  // To get to know which component to be rendered for particulat url which is equivalent to render
  // but without rendering we can get to know which component to be rendered using matchRoutes
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => console.log("Listening on port 3000"));
