import React, { Component } from "react";
import AdminTemplate from "../../Templates/adminTemplate";
import { connect } from "react-redux";
import {
  adminFetchDanhMucKhoaHoc,
  adminFetchDanhSachKhoaHoc,
  showModalKhoaHoc,
} from "../../Redux/Action/admin";
import AdminKhoaHocItem from "../../Components/AdminKhoaHocItem/adminKhoaHocItem";
import ModalKhoaHoc from "../../Components/ModalKhoaHoc/modalKhoaHoc";

class TrangQuanLyKhoaHoc extends Component {
  state = {
    currentPage: 1,
    itemPerPage: 8,
  };

  handleTrangTruoc = () => {
    this.setState(
      {
        currentPage: this.state.currentPage - 1,
      },
      () => {
        this.props.dispatch(
          adminFetchDanhSachKhoaHoc(
            this.state.currentPage,
            this.state.itemPerPage
          )
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
          adminFetchDanhSachKhoaHoc(
            this.state.currentPage,
            this.state.itemPerPage
          )
        );
      }
    );
  };

  handleChangHienThi = (event) => {
    this.setState(
      {
        itemPerPage: event.target.value,
      },
      () => {
        this.props.dispatch(
          adminFetchDanhSachKhoaHoc(
            this.state.currentPage,
            this.state.itemPerPage
          )
        );
      }
    );
  };

  renderKhoaHoc = () => {
    return this.props.khoaHocPhanTrang.map((item, index) => {
      return <AdminKhoaHocItem key={index} item={item} />;
    });
  };

  handleThemKhoaHoc = () => {
    this.props.dispatch(showModalKhoaHoc);
  };

  render() {
    return (
      <div className="trangQuanLyKhoaHoc">
        <h1 className="text-center">Quản lý khóa học</h1>
        <button
          onClick={this.handleThemKhoaHoc}
          className="btn ml-3 mb-3 themKhoaHoc"
        >
          Thêm Khóa Học
        </button>
        <table className="table table-striped mt-2">
          <thead>
            <tr>
              <th>Hình Ảnh</th>
              <th>Tên Khóa Học</th>
              <th>Người Tạo</th>
              <th>Ngày Tạo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderKhoaHoc()}</tbody>
        </table>
        <div className="pagination my-5">
          <div className="mr-3">
            <label className="mr-2">Hiển thị: </label>
            <select onChange={this.handleChangHienThi}>
              <option>8</option>
              <option>16</option>
              <option>25</option>
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
        {this.props.isShow ? <ModalKhoaHoc /> : false}
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(
      adminFetchDanhSachKhoaHoc(this.state.currentPage, this.state.itemPerPage)
    );
    this.props.dispatch(adminFetchDanhMucKhoaHoc);
  }
}

const mapStateToProps = (state) => {
  return {
    khoaHocPhanTrang: state.admin.adminDanhSachKhoaHoc.items || [],
    tongTrang: state.admin.adminDanhSachKhoaHoc.totalPages,
    isShow: state.admin.isShowModalKhoaHoc,
  };
};

export default connect(mapStateToProps)(AdminTemplate(TrangQuanLyKhoaHoc));
