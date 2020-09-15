import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../actions/types";

const INITIAL_STATE = {
  lists: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      
      const obj = action.payload;
      let array = state.lists.slice();
      array.push(obj);

      return { ...state, lists: array };

    case DELETE_ITEM:
      state.lists.splice(action.payload, 1);
      let arr = state.lists.slice();

      return { ...state, lists: arr };

    case UPDATE_ITEM:
    
      state.lists.splice(action.index, 1, action.payload);
      let newArray = state.lists.slice();

      return { ...state, lists: newArray };

    default:
      return state;
  }
};
