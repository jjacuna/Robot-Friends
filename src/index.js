import React from "react"; //the view window
import ReactDOM from "react-dom"; //
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import App from "./App.js";
import CardList from "./CardList";
import { robots } from "./Robots.js";

// const reactElement = <h1>Hello World</h1>;
// ReactDOM.render(reactElement, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
