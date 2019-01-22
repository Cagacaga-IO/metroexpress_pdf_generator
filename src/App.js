import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Router } from "react-router-dom";
import history from "./utils"
import Main from "./Layout/Main"
import PDF from "./Layout/PDF"

import "./style/style.scss";


const App = () => (
  <BrowserRouter>
    <Router history={history} >
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/pdf" component={PDF} />
      </div>
    </Router>
  </BrowserRouter>
)

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
