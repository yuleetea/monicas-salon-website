import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <SimpleReactLightbox>
    <Router>
      <App />
    </Router>
  </SimpleReactLightbox>,

  document.getElementById("root")
);
