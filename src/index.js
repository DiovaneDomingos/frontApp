import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/easy-open.scss?v1.0.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

import Index from "views/Index.jsx";
import Presentation from "views/Presentation.jsx";
import Sections from "views/Sections.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import LoginPage from "views/examples/LoginPage.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />
      <Route path="/sections" render={(props) => <Sections {...props} />} />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
