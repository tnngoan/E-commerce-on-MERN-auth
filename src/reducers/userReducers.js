import React from "react";
import { USER_LOGIN_REQUEST } from "./types/userActionTypes";

const login = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case LOGIN_FAIL:
      return { looading: false, error: action.payload };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

const register = () => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const getDetails = () => {};

const updateProfile = () => {};

const getList = () => {};

const update = () => {};

const terminate = () => {};

export { Userreducers };
