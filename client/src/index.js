import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./view/page/Home";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import appReducers from "./redux/reducer/index";
import { createStore, applyMiddleware } from "redux";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
