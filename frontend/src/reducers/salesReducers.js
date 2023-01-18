import {
  SALES_LIST_FAIL,
  SALES_LIST_SUCCESS,
  SALES_LIST_REQUEST,
  SALES_ADD_LIST_FAIL,
  SALES_ADD_LIST_REQUEST,
  SALES_ADD_LIST_SUCCESS,
} from "../constants/salesConstants";

export const salesListReducers = (state = { sales: [] }, action) => {
  switch (action.type) {
    case SALES_LIST_REQUEST:
      return { loading: true, sales: [] };
    case SALES_LIST_SUCCESS:
      return { loading: false, sales: action.payload };
    case SALES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const saleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SALES_ADD_LIST_REQUEST:
      return { loading: true };
    case SALES_ADD_LIST_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case SALES_ADD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
