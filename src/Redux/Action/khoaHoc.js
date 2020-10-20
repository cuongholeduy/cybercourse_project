import { createRequest } from "../../Configs/request";
import { createAction } from "./createAction";
import {
  SET_CHI_TIET_KHOA_HOC,
  SET_DANH_DACH_KHOA_HOC,
  SET_DANH_MUC_KHOA_HOC,
  SET_KHOA_HOC_DANH_MUC,
  SET_KHOA_HOC_PHAN_TRANG,
} from "./type";

export const fetchDanhSachKhoaHoc = (dispatch) => {
  createRequest({
    url:
      "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP05",
    method: "GET",
  })
    .then((res) => {
      dispatch(createAction(SET_DANH_DACH_KHOA_HOC, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchDanhMucKhoaHoc = (dispatch) => {
  createRequest({
    url:
      "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    method: "GET",
  })
    .then((res) => {
      dispatch(createAction(SET_DANH_MUC_KHOA_HOC, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchKhoaHocPhanTrang = (currentPage) => {
  return (dispatch) => {
    createRequest({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=8&MaNhom=GP05`,
      method: "GET",
    })
      .then((res) => {
        dispatch(createAction(SET_KHOA_HOC_PHAN_TRANG, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchKhoaHocTheoDanhMuc = (maDanhMuc) => {
  return (dispatch) => {
    createRequest({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP05`,
      method: "GET",
    })
      .then((res) => {
        dispatch(createAction(SET_KHOA_HOC_DANH_MUC, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchChiTietKhoaHoc = (maKhoaHoc) => {
  return (dispatch) => {
    createRequest({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      method: "GET",
    })
      .then((res) => {
        dispatch(createAction(SET_CHI_TIET_KHOA_HOC, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
