import { createRequest } from "../../Configs/request";
import { createAction } from "./createAction";
import { SET_DANH_DACH_KHOA_HOC, SET_DANH_MUC_KHOA_HOC } from "./type";

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
