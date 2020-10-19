import { SET_DANH_DACH_KHOA_HOC, SET_DANH_MUC_KHOA_HOC } from "../Action/type";

let initialState = {
  danhSachKhoaHoc: [],
  danhMucKhoaHoc: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_DANH_DACH_KHOA_HOC: {
      state.danhSachKhoaHoc = payload;
      return { ...state };
    }
    case SET_DANH_MUC_KHOA_HOC: {
      state.danhMucKhoaHoc = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
