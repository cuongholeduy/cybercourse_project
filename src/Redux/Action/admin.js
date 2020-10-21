import { createRequest } from "../../Configs/request";
import { createAction } from "./createAction";
import Swal from "sweetalert2";
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
} from "./type";

export const fetchDanhSachNguoiDung = (currentPage, itemPerPage) => {
  return (dispatch) => {
    createRequest({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP05&page=${currentPage}&pageSize=${itemPerPage}`,
      method: "GET",
    })
      .then((res) => {
        dispatch(createAction(SET_DANH_SACH_NGUOI_DUNG, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const xoaNguoiDung = (taiKhoan, callback) => {
  return (dispatch) => {
    createRequest({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      data: taiKhoan,
    })
      .then((res) => {
        Swal.fire({
          position: "center",
          title: "Xóa người dùng thành công",
          icon: "success",
          timer: "1500",
          showConfirmButton: false,
        });

        setTimeout(() => {
          callback();
        }, 1500);
      })
      .catch((err) => {
        console.log(err.response);
        Swal.fire({
          position: "center",
          title: err.response.data,
          icon: "error",
          showConfirmButton: true,
        });
      });
  };
};

export const themNguoiDung = (user, callback) => {
  return (dispatch) => {
    createRequest({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
    })
      .then((res) => {
        Swal.fire({
          position: "center",
          title: "Thêm người dùng thành công",
          icon: "success",
          timer: "1500",
          showConfirmButton: false,
        });

        setTimeout(() => {
          callback();
        }, 1500);

        dispatch(createAction(HIDE_MODAL_NGUOI_DUNG));
      })
      .catch((err) => {
        console.log(err);
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

export const chinhSuaNguoiDung = (user, callback) => {
  return (dispatch) => {
    createRequest({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: user,
    })
      .then((res) => {
        console.log(res);

        Swal.fire({
          position: "center",
          title: "Cập nhật người dùng thành công",
          icon: "success",
          timer: "1500",
          showConfirmButton: false,
        });

        setTimeout(() => {
          callback();
        }, 1500);

        dispatch(createAction(HIDE_MODAL_NGUOI_DUNG));
      })
      .catch((err) => {
        console.log(err);
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

export const showModalNguoiDung = (dispatch) => {
  dispatch(createAction(SHOW_MODAL_NGUOI_DUNG));
};

export const hideModalNguoiDung = (dispatch) => {
  dispatch(createAction(HIDE_MODAL_NGUOI_DUNG));
};

export const chonNguoiDung = (user) => {
  return (dispatch) => {
    dispatch(createAction(SHOW_MODAL_NGUOI_DUNG));
    dispatch(createAction(CHON_NGUOI_DUNG, user));
  };
};

export const khongChonNguoiDung = (dispatch) => {
  dispatch(createAction(KHONG_CHON_NGUOI_DUNG, null));
};

export const adminFetchDanhSachKhoaHoc = (currentPage, itemPerPage) => {
  return (dispatch) => {
    createRequest({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${itemPerPage}&MaNhom=GP05`,
      method: "GET",
    })
      .then((res) => {
        dispatch(createAction(ADMIN_SET_KHOA_HOC_PHAN_TRANG, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const adminFetchDanhMucKhoaHoc = (dispatch) => {
  createRequest({
    url:
      "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    method: "GET",
  })
    .then((res) => {
      dispatch(createAction(ADMIN_SET_DANH_MUC_KHOA_HOC, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const themKhoaHoc = (value, khoaHoc, callback) => {
  return (dispatch) => {
    createRequest({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
      method: "POST",
      data: khoaHoc,
    })
      .then((res) => {
        let frm = new FormData();
        frm.append("file", value.hinhAnh);
        frm.append("tenKhoaHoc", res.data.tenKhoaHoc);

        Swal.fire({
          position: "center",
          title: "Thêm khóa học thành công",
          icon: "success",
          timer: "1500",
          showConfirmButton: false,
        });

        setTimeout(() => {
          callback();
        }, 1500);

        dispatch(createAction(HIDE_MODAL_KHOA_HOC));

        return createRequest({
          url:
            "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
          method: "POST",
          data: frm,
        });
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
        Swal.fire({
          position: "center",
          title: err.response.data,
          icon: "error",
          showConfirmButton: true,
        });
      });
  };
};

export const xoaKhoaHoc = (maKhoaHoc, callback) => {
  return (dispatch) => {
    createRequest({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
      method: "DELETE",
    })
      .then((res) => {
        Swal.fire({
          position: "center",
          title: "Xóa khóa học thành công",
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

export const chinhSuaKhoaHoc = (value, khoaHoc, callback) => {
  return (dispatch) => {
    createRequest({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc",
      method: "PUT",
      data: khoaHoc,
    })
      .then((res) => {
        console.log(res.data);
        let frm = new FormData();
        frm.append("file", value.hinhAnh);
        frm.append("tenKhoaHoc", res.data.tenKhoaHoc);

        Swal.fire({
          position: "center",
          title: "Sửa khóa học thành công",
          icon: "success",
          timer: "1500",
          showConfirmButton: false,
        });

        setTimeout(() => {
          callback();
        }, 1500);

        dispatch(createAction(HIDE_MODAL_KHOA_HOC));

        return createRequest({
          url:
            "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
          method: "POST",
          data: frm,
        });
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const chonKhoaHoc = (khoaHoc) => {
  return (dispatch) => {
    dispatch(createAction(SHOW_MODAL_KHOA_HOC));
    dispatch(createAction(CHON_KHOA_HOC, khoaHoc));
  };
};

export const khongChonKhoaHoc = (dispatch) => {
  dispatch(createAction(KHONG_CHON_KHOA_HOC, null));
};

export const showModalKhoaHoc = (dispatch) => {
  dispatch(createAction(SHOW_MODAL_KHOA_HOC));
};

export const hideModalKhoaHoc = (dispatch) => {
  dispatch(createAction(HIDE_MODAL_KHOA_HOC));
};
