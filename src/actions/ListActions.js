import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./types";

export const addItem = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      payload,
    });
  };
};

export const deleteItem = (payload) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ITEM,
      payload,
    });
  };
};

export const updateItem = (payload, index) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_ITEM,
      payload,
      index,
    });
  };
};
