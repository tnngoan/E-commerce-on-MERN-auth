import * as user from "./types/userActionTypes";

const login = (state = {}, action) => {
  switch (action.type) {
    case user.LOGIN_REQUEST:
      return { loading: true };
    case user.LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case user.LOGIN_FAIL:
      return { looading: false, error: action.payload };
    case user.LOGOUT:
      return {};
    default:
      return state;
  }
};

const register = (state = {}, action) => {
  switch (action.type) {
    case user.REGISTER_REQUEST:
      return { loading: true };
    case user.REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case user.REGISTER_FAIL:
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
