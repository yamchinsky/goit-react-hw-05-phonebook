import types from "./contacts-types";
import { v4 } from "uuid";

const contactSave = (payload) => ({
  type: types.SAVE_CONTACT,
  payload: { ...payload, id: v4() },
});

const contactRemove = (id) => ({
  type: types.REMOVE_CONTACT,
  payload: id,
});
const filterUpdate = (filter) => ({
  type: types.UPDATE_FILTER,
  payload: filter,
});

export default { contactSave, contactRemove, filterUpdate };
