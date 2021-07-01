import { combineReducers } from "redux";
import types from "./contacts-types";
import initialState from "./contactsInitialState";

const items = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SAVE_CONTACT:
      const newState = [...state, payload];
      return newState;
    case types.REMOVE_CONTACT:
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.UPDATE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
