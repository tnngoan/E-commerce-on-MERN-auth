import * as type from "./types/userActionTypes";

const login = (state = {}, action) => {
  switch (action.type) {
    case type.LOGIN_REQUEST:
      return { loading: true };
    case type.LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case type.LOGIN_FAIL:
      return { looading: false, error: action.payload };
    case type.LOGOUT:
      return {};
    default:
      return state;
  }
};

const register = (state = {}, action) => {
  switch (action.type) {
    case type.REGISTER_REQUEST:
      return { loading: true };
    case type.REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case type.REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// const getDetails = () => {};

// const updateProfile = () => {};

// const getList = () => {};

// const update = () => {};

// const terminate = () => {};

export { register, login };
