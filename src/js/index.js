//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import { TrafficLight } from "/workspaces/Andidela-Traffic-Light/src/js/TrafficLight.js";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));