import React, { Component } from "react";
import AdminTemplate from "../../Templates/adminTemplate";
import { connect } from "react-redux";
import {
  fetchDanhSachNguoiDung,
  showModalNguoiDung,
} from "../../Redux/Action/admin";
import NguoiDungItem from "../../Components/NguoiDungItem/nguoiDungItem";
import ModalNguoiDung from "../../Components/ModalNguoiDung/modalNguoiDung";

class TrangQuanLyNguoiDung extends Component {
  state = {
    currentPage: 1,
    itemPerPage: 10,
  };

  renderNguoiDung = () => {
    return this.props.nguoiDungPhanTrang.map((item, index) => {
      return <NguoiDungItem key={index} item={item} />;
    });
  };

  handleTrangTruoc = () => {
    this.setState(
      {
        currentPage: this.state.currentPage - 1,
      },
      () => {
        this.props.dispatch(
          fetchDanhSachNguoiDung(this.state.currentPage, this.state.itemPerPage)
        );
      }
    );
  };

  handleTrangSau = () => {
    this.setState(
      {
        currentPage: this.state.currentPage + 1,
      },
      () => {
        this.props.dispatch(
          fetchDanhSachNguoiDung(this.state.currentPage, this.state.itemPerPage)
        );
      }
    );
  };

  handleChangeHienThi = (event) => {
    this.setState(
      {
        itemPerPage: event.target.value,
      },
      () => {
        this.props.dispatch(
          fetchDanhSachNguoiDung(this.state.currentPage, this.state.itemPerPage)
        );
      }
    );
  };

  handleThemNguoiDung = () => {
    this.props.dispatch(showModalNguoiDung);
  };

  render() {
    return (
      <div className="trangQuanLyNguoiDung">
        <h1 className="text-center">Quản lý người dùng</h1>
        <button
          onClick={this.handleThemNguoiDung}
          className="btn ml-3 mb-3 themNguoiDung"
        >
          Thêm Người Dùng
        </button>
        <table className="table table-striped mt-2">
          <thead>
            <tr>
              <th>Tài Khoản</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Điện Thoại</th>
              <th>Người Dùng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderNguoiDung()}</tbody>
        </table>
        <div className="pagination my-5">
          <div className="mr-3">
            <label className="mr-2">Hiển thị: </label>
            <select onChange={this.handleChangeHienThi}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
          <button
            onClick={this.handleTrangTruoc}
            disabled={this.state.currentPage === 1 ? true : false}
            className="btn mr-2"
          >{`< Trang Trước`}</button>
          <span>
            {this.state.currentPage} / {this.props.tongTrang}
          </span>
          <button
            onClick={this.handleTrangSau}
            disabled={
              this.props.tongTrang === this.state.currentPage ? true : false
            }
            className="btn ml-2"
          >{`Trang Sau >`}</button>
        </div>
        {this.props.isShow ? <ModalNguoiDung /> : false}
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(
      fetchDanhSachNguoiDung(this.state.currentPage, this.state.itemPerPage)
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungPhanTrang: state.admin.danhSachNguoiDung.items || [],
    tongTrang: state.admin.danhSachNguoiDung.totalPages,
    isShow: state.admin.isShowModalNguoiDung,
  };
};

export default connect(mapStateToProps)(AdminTemplate(TrangQuanLyNguoiDung));
