import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { huyGhiDanhKhoaHoc } from "../../Redux/Action/user";

class KhoaHocDaDangKy extends Component {
  handleHuyGhiDanhKhoaHoc = (maKhoaHoc) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const data = {
      taiKhoan: user.taiKhoan,
      matKhau: user.matKhau,
      maKhoaHoc: maKhoaHoc,
    };
    this.props.dispatch(huyGhiDanhKhoaHoc(data));
  };

  renderKhoaHocDaDangKy = () => {
    return this.props.khoaHocDaDangKy.map((item, index) => {
      return (
        <div key={index} className="col-lg-3 col-sm-4 col-12">
          <div className="khoaHocDaDangKy__item text-center">
            <h4
              onClick={() => {
                this.props.history.push("/chitietkhoahoc/" + item.maKhoaHoc);
              }}
              className="text-center"
            >
              {item.tenKhoaHoc}
            </h4>
            <button
              onClick={() => this.handleHuyGhiDanhKhoaHoc(item.maKhoaHoc)}
              className="btn mt-3"
            >
              Hủy ghi danh
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="khoaHocDaDangKy my-5">
        <h1 className="text-center mb-5">Khóa học đã đăng ký</h1>
        <div className="container text-center">
          <div className="row">{this.renderKhoaHocDaDangKy()}</div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    khoaHocDaDangKy: state.user.thongTinUser.chiTietKhoaHocGhiDanh || [],
  };
};

export default withRouter(connect(mapStatetoProps)(KhoaHocDaDangKy));
