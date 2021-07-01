// import types from "./contacts-types";
import { v4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const contactSave = createAction("contacts/add", (text) => {
  return {
    payload: { ...text, id: v4() },
  };
});
// const contactSave = (payload) => ({
//   type: types.SAVE_CONTACT,
//   payload: { ...payload, id: v4() },
// });
const contactRemove = createAction("contacts/remove");
// const contactRemove = (id) => ({
//   type: types.REMOVE_CONTACT,
//   payload: id,
// });

const filterUpdate = createAction("contacts/updateFilter");

// const filterUpdate = (filter) => ({
//   type: types.UPDATE_FILTER,
//   payload: filter,
// });

export default { contactSave, contactRemove, filterUpdate };
