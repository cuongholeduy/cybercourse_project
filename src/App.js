import React, { Component } from "react";
import "./Scss/main.scss";
import TrangChu from "./Pages/TrangChu/trangChu";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import TrangTatCaKhoaHoc from "./Pages/TrangTatCaKhoaHoc/trangTatCaKhoaHoc";
import TrangChiTietKhoaHoc from "./Pages/TrangChiTietKhoaHoc/trangChiTietKhoaHoc";
import TrangKhoaHocDanhMuc from "./Pages/TrangKhoaHocDanhMuc/trangKhoaHocDanhMuc";
import TrangDangKy from "./Pages/TrangDangKy/trangDangKy";
import TrangDangNhap from "./Pages/TrangDangNhap/trangDangNhap";
import { connect } from "react-redux";
import { createAction } from "./Redux/Action/createAction";
import { SET_THONG_TIN_USER, SET_TOKEN } from "./Redux/Action/type";
import TrangThongTinTaiKhoan from "./Pages/TrangThongTinTaiKhoan/trangThongTinTaiKhoan";
import TrangQuanLyNguoiDung from "./Pages/TrangQuanLyNguoiDung/trangQuanLyNguoiDung";
import TrangQuanLyKhoaHoc from "./Pages/TrangQuanLyKhoaHoc/trangQuanLyKhoaHoc";
import TrangTimKiem from "./Pages/TrangTimKiem/trangTimKiem";

class App extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    let maLoaiNguoiDung;
    if (user) {
      maLoaiNguoiDung = user.maLoaiNguoiDung;
    } else {
      maLoaiNguoiDung = "";
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/tatcakhoahoc" component={TrangTatCaKhoaHoc} />
          <Route
            path="/chitietkhoahoc/:makhoahoc"
            component={TrangChiTietKhoaHoc}
          />
          <Route path="/danhmuc/:madanhmuc" component={TrangKhoaHocDanhMuc} />
          <Route path="/timkiem/:tukhoa" component={TrangTimKiem} />
          <Route path="/dangky" component={TrangDangKy} />
          <Route path="/dangnhap" component={TrangDangNhap} />
          <Route path="/thongtintaikhoan" component={TrangThongTinTaiKhoan} />

          <Route path="/admin/quanlynguoidung">
            {maLoaiNguoiDung === "GV" ? (
              <TrangQuanLyNguoiDung />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route path="/admin/quanlykhoahoc">
            {maLoaiNguoiDung === "GV" ? (
              <TrangQuanLyKhoaHoc />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route path="/admin">
            {maLoaiNguoiDung === "GV" ? (
              <Redirect to="/admin/quanlynguoidung" />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route path="/" component={TrangChu} />
        </Switch>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if (user) {
      this.props.dispatch(createAction(SET_THONG_TIN_USER, user));
      this.props.dispatch(createAction(SET_TOKEN, token));
    }
  }
}

export default connect()(App);
