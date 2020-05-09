import {
  CHECK_AUTH,
  CHECK_ERROR,
  GET_NAME,
  GET_EMAIL,
  GET_PERMISSIONS,
} from "../utils/authActions";

export default {
  namespaced: true,
  getters: {
    [GET_NAME]() {
      return null;
    },
    [GET_EMAIL]() {
      return null;
    },
    [GET_PERMISSIONS]() {
      return [];
    },
  },
  actions: {
    [CHECK_AUTH]: () => {},
    [CHECK_ERROR]: () => {},
  },
};
