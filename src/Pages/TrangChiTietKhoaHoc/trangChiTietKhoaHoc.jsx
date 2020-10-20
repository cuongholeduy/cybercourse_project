import React, { Component } from "react";
import HomeTemplate from "../../Templates/homeTemplate";
import { connect } from "react-redux";
import { fetchChiTietKhoaHoc } from "../../Redux/Action/khoaHoc";
import Swal from "sweetalert2";
import { dangKyKhoaHoc } from "../../Redux/Action/user";

class TrangChiTietKhoaHoc extends Component {
  handleDangKyKhoaHoc = () => {
    if (this.props.isLogin) {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        maKhoaHoc: this.props.chiTietKhoaHoc.maKhoaHoc,
      };
      this.props.dispatch(dangKyKhoaHoc(data));
    } else {
      Swal.fire({
        position: "center",
        title: "Vui lòng đăng nhập để đăng ký khóa học",
        icon: "warning",
        showConfirmButton: true,
      });
      this.props.history.push("/dangnhap");
    }
  };

  render() {
    const {
      tenKhoaHoc,
      moTa,
      hinhAnh,
      luotXem,
      ngayTao,
      nguoiTao,
    } = this.props.chiTietKhoaHoc;

    return (
      <div className="chiTietKhoaHoc">
        <div
          className="chiTietKhoaHoc__header"
          style={{
            backgroundImage: `url(${hinhAnh})`,
          }}
        >
          <div className="chiTietKhoaHoc__header__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-12 text-center pt-4">
                  <img src={hinhAnh} alt="aaaa" />
                </div>
                <div className="col-lg-8 col-sm-6 col-12 px-5 pt-5 text-center">
                  <h2 className="font-weight-bold mb-4">{tenKhoaHoc}</h2>
                  <p>Lượt xem: {luotXem}</p>
                  <button
                    onClick={this.handleDangKyKhoaHoc}
                    className="btn my-3"
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chiTietKhoaHoc__body my-5">
          <h2 className="text-center">Chi tiết khóa học</h2>
          <div className="mt-5 container">
            <h3>Giảng viên:</h3>
            <p>{nguoiTao ? nguoiTao.hoTen : ""}</p>
            <h3>Ngày cập nhật:</h3>
            <p>{ngayTao}</p>
            <h3>Mô tả: </h3>
            <p>{moTa}</p>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const maKhoaHoc = this.props.match.params.makhoahoc;
    this.props.dispatch(fetchChiTietKhoaHoc(maKhoaHoc));
  }
}

const mapStateToProps = (state) => {
  return {
    chiTietKhoaHoc: state.khoaHoc.chiTietKhoaHoc,
    isLogin: !!state.user.token,
  };
};

export default connect(mapStateToProps)(HomeTemplate(TrangChiTietKhoaHoc));
