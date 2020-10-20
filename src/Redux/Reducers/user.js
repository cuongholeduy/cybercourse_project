import { SET_THONG_TIN_USER, SET_TOKEN } from "../Action/type";

let initialState = {
  token: "",
  thongTinUser: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TOKEN: {
      state.token = payload;
      return { ...state };
    }
    case SET_THONG_TIN_USER: {
      state.thongTinUser = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
