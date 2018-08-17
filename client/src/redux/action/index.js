import * as Types from "../action_type";
import * as ApiPaths from "../../common/constant";
import { apiCaller } from "../../common/function";

export const getListProduct = () => {
  var params = {};
  return dispatch => {
    return apiCaller(ApiPaths.URL_API_PRODUCT, "GET", params).then(res => {
      dispatch(getListProduct_Dispatch(res.data));
    });
  };
};

export const getListProduct_Dispatch = products => {
  return { type: Types.GET_LIST_PRODUCT, products };
};
