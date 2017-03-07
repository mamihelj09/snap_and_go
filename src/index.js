import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux"

import { store } from "./store"
import Home from "./routes/Home"
import LogIn from "./routes/LogIn"
import SignUp from "./routes/SignUp"
import Profile from "./routes/Profile"
import AddProduct from "./routes/AddProduct"

import "./css/App.css"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/singup" component={SignUp} />
        <Route path="/profile/:id/" component={Profile} />
        <Route path="/addproduct" component={AddProduct} />
      </div>
    </Router>
  </Provider>
  , document.getElementById("root"))


