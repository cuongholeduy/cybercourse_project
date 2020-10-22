import {
  CLEAR_MANG_TIM_KIEM,
  SET_CHI_TIET_KHOA_HOC,
  SET_DANH_DACH_KHOA_HOC,
  SET_DANH_MUC_KHOA_HOC,
  SET_KHOA_HOC_DANH_MUC,
  SET_KHOA_HOC_PHAN_TRANG,
  SET_TIM_KIEM_TU_KHOA,
} from "../Action/type";

let initialState = {
  danhSachKhoaHoc: [],
  danhMucKhoaHoc: [],
  khoaHocPhanTrang: {},
  khoaHocDanhMuc: [],
  chiTietKhoaHoc: {},
  mangTimKiem: [],
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
    case SET_KHOA_HOC_PHAN_TRANG: {
      state.khoaHocPhanTrang = payload;
      return { ...state };
    }
    case SET_KHOA_HOC_DANH_MUC: {
      state.khoaHocDanhMuc = payload;
      return { ...state };
    }
    case SET_CHI_TIET_KHOA_HOC: {
      state.chiTietKhoaHoc = payload;
      return { ...state };
    }
    case SET_TIM_KIEM_TU_KHOA: {
      // for (let item of state.danhSachKhoaHoc) {
      //   let find = item.biDanh.indexOf(payload);
      //   if (find !== -1) {
      //     state.mangTimKiem.push(item);
      //   }
      // }
      state.mangTimKiem = payload;
      return { ...state };
    }
    case CLEAR_MANG_TIM_KIEM: {
      state.mangTimKiem = [];
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
