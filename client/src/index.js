import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Explore from "./components/Explore";
import "./index.css";

import { createStore } from "redux"; // function imported from redux
import reducer from "./store/reducer"; // function that updates the global store
import { Provider } from 'react-redux' // component from react-redux responsible for providing global store to components

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route component={App} path="/" exact />
            <Route component={Register} path="/register/user" />
            <Route component={Login} path="/login/user" />
            <Route component={Explore} path="/explore" />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
