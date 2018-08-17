import * as Types from "../action_type";
import { apiCaller } from "../../common/function";

export const getListProduct = () => {
  var params = {};
  return dispatch => {
    return apiCaller("/api/products", "GET", params).then(res => {
      dispatch(getListProductDispatch(res.data));
    });
  };
};

export const getListProductDispatch = products => {
  return { type: Types.GET_LIST_PRODUCT, products };
};
