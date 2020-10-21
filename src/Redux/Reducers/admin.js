import {
  ADMIN_SET_DANH_MUC_KHOA_HOC,
  ADMIN_SET_KHOA_HOC_PHAN_TRANG,
  CHON_KHOA_HOC,
  CHON_NGUOI_DUNG,
  HIDE_MODAL_KHOA_HOC,
  HIDE_MODAL_NGUOI_DUNG,
  KHONG_CHON_KHOA_HOC,
  KHONG_CHON_NGUOI_DUNG,
  SET_DANH_SACH_NGUOI_DUNG,
  SHOW_MODAL_KHOA_HOC,
  SHOW_MODAL_NGUOI_DUNG,
} from "../Action/type";

let initialState = {
  danhSachNguoiDung: {},
  isShowModalNguoiDung: false,
  nguoiDungDuocChon: null,
  adminDanhSachKhoaHoc: {},
  isShowModalKhoaHoc: false,
  khoaHocDuocChon: null,
  adminDanhMucKhoaHoc: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DANH_SACH_NGUOI_DUNG: {
      state.danhSachNguoiDung = payload;
      return { ...state };
    }
    case CHON_NGUOI_DUNG: {
      state.nguoiDungDuocChon = payload;
      return { ...state };
    }
    case KHONG_CHON_NGUOI_DUNG: {
      state.nguoiDungDuocChon = payload;
      return { ...state };
    }
    case SHOW_MODAL_NGUOI_DUNG: {
      state.isShowModalNguoiDung = true;
      return { ...state };
    }
    case HIDE_MODAL_NGUOI_DUNG: {
      state.isShowModalNguoiDung = false;
      return { ...state };
    }
    case ADMIN_SET_KHOA_HOC_PHAN_TRANG: {
      state.adminDanhSachKhoaHoc = payload;
      return { ...state };
    }
    case ADMIN_SET_DANH_MUC_KHOA_HOC: {
      state.adminDanhMucKhoaHoc = payload;
      return { ...state };
    }
    case CHON_KHOA_HOC: {
      state.khoaHocDuocChon = payload;
      return { ...state };
    }
    case KHONG_CHON_KHOA_HOC: {
      state.khoaHocDuocChon = payload;
      return { ...state };
    }
    case SHOW_MODAL_KHOA_HOC: {
      state.isShowModalKhoaHoc = true;
      return { ...state };
    }
    case HIDE_MODAL_KHOA_HOC: {
      state.isShowModalKhoaHoc = false;
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
