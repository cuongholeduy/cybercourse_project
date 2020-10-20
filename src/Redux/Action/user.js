import { createRequest } from "../../Configs/request";
import { createAction } from "./createAction";
import Swal from "sweetalert2";
import { SET_THONG_TIN_USER, SET_TOKEN } from "./type";

export const dangKyTaiKhoan = (taiKhoan, callback) => {
  return (dispatch) => {
    createRequest({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: taiKhoan,
    })
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          title: "Đăng ký thành công",
          icon: "success",
          timer: "1500",
          showConfirmButton: false,
        });

        callback();
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          title: err.response.data,
          icon: "error",
          timer: "1500",
          showConfirmButton: false,
        });
      });
  };
};

export const dangNhap = (taiKhoan, callback) => {
  return (dispatch) => {
    createRequest({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: taiKhoan,
    })
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        dispatch(createAction(SET_TOKEN, res.data.accessToken));

        return createRequest({
          url:
            "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
          method: "POST",
          data: taiKhoan,
        });
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(createAction(SET_THONG_TIN_USER, res.data));

        Swal.fire({
          position: "center",
          title: "Đăng nhập thành công",
          icon: "success",
          timer: "1500",
          showConfirmButton: false,
        });

        setTimeout(() => {
          callback();
        }, 1500);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          title: err.response.data,
          icon: "error",
          timer: "1500",
          showConfirmButton: false,
        });
      });
  };
};

export const capNhatThongTin = (taiKhoan, callback) => {
  return (dispatch) => {
    createRequest({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: taiKhoan,
    })
      .then((res) => {
        return createRequest({
          url:
            "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
          method: "POST",
          data: res.data,
        });
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(createAction(SET_THONG_TIN_USER, res.data));

        Swal.fire({
          position: "center",
          title: "Cập nhật thành công",
          icon: "success",
          timer: "1500",
          showConfirmButton: false,
        });

        setTimeout(() => {
          callback();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const dangKyKhoaHoc = (user) => {
  return (dispatch) => {
    createRequest({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
      method: "POST",
      data: user,
    })
      .then((res) => {
        Swal.fire({
          position: "center",
          title: res.data,
          icon: "success",
          timer: "1500",
          showConfirmButton: false,
        });
        return createRequest({
          url:
            "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
          method: "POST",
          data: user,
        });
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(createAction(SET_THONG_TIN_USER, res.data));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "center",
          title: err.response.data,
          icon: "error",
          showConfirmButton: true,
        });
      });
  };
};

export const huyGhiDanhKhoaHoc = (user) => {
  return (dispatch) => {
    createRequest({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
      method: "POST",
      data: user,
    })
      .then((res) => {
        Swal.fire({
          position: "center",
          title: res.data,
          icon: "success",
          timer: "1500",
          showConfirmButton: false,
        });

        return createRequest({
          url:
            "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
          method: "POST",
          data: user,
        });
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(createAction(SET_THONG_TIN_USER, res.data));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "center",
          title: err.response.data,
          icon: "error",
          showConfirmButton: true,
        });
      });
  };
};
