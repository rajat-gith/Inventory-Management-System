import axios from "axios";
import {
  SALES_LIST_FAIL,
  SALES_LIST_SUCCESS,
  SALES_LIST_REQUEST,
  SALES_ADD_LIST_FAIL,
  SALES_ADD_LIST_REQUEST,
  SALES_ADD_LIST_SUCCESS,
} from "../constants/salesConstants";

export const listSales = () => async (dispatch) => {
  try {
    dispatch({ type: SALES_LIST_REQUEST });
    const { data } = await axios.get(`/api/sales`);

    dispatch({
      type: SALES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SALES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createSales =
  (quantity, destination, source, datetime) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SALES_ADD_LIST_REQUEST,
      });

      const { data } = await axios.post(`/api/sales/add/`, {
        quantity: quantity,
        date: datetime,
        destination: destination,
        source: source,
      });
      dispatch({
        type: SALES_ADD_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SALES_ADD_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
