import * as Types from "../../action_type";

var initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_LIST_PRODUCT:
      state = action.products.data;
      return [...state];
    default:
      return state;
  }
};
export default products;
