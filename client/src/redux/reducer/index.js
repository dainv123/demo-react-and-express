import { combineReducers } from "redux";
import products from "./models/product";

const appReducers = combineReducers({
  products
});

export default appReducers;
