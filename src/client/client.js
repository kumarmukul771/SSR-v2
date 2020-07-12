// Startup point for the client side application
// const React = require("react");
// const ReactDOM = require("react-dom");
// const Home = require("./components/Home").default;
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

console.log("Hitrrdr there");
ReactDOM.hydrate(<Home />, document.querySelector("#root"));
