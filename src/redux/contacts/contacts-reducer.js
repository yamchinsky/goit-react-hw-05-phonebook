import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
// import types from "./contacts-types";
import initialState from "./contactsInitialState";

const items = createReducer(initialState, {
  [actions.contactSave]: (state, { payload }) => [...state, payload],
  [actions.contactRemove]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

// const items = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.SAVE_CONTACT:
//       const newState = [...state, payload];
//       return newState;
//     case types.REMOVE_CONTACT:
//       return state.filter((item) => item.id !== payload);
//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [actions.filterUpdate]: (state, { payload }) => payload,
});

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contacts/updateFilter":
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
