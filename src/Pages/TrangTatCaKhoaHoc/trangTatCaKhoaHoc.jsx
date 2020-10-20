import React, { Component } from "react";
import HomeTemplate from "../../Templates/homeTemplate";
import { connect } from "react-redux";
import { fetchKhoaHocPhanTrang } from "../../Redux/Action/khoaHoc";
import KhoaHocItem from "../../Components/KhoaHocItem/khoaHocItem";

class TrangTatCaKhoaHoc extends Component {
  state = {
    currentPage: 1,
  };

  handleTrangTruoc = () => {
    this.setState(
      {
        currentPage: this.state.currentPage - 1,
      },
      () => {
        this.props.dispatch(fetchKhoaHocPhanTrang(this.state.currentPage));
      }
    );
  };

  handleTrangSau = () => {
    this.setState(
      {
        currentPage: this.state.currentPage + 1,
      },
      () => {
        this.props.dispatch(fetchKhoaHocPhanTrang(this.state.currentPage));
      }
    );
  };

  renderKhoaHocPhanTrang = () => {
    return this.props.khoaHocPhanTrang.map((item, index) => {
      return (
        <div key={index} className="col-lg-3 col-sm-6 col-12 p-2">
          <KhoaHocItem item={item} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="trangTatCaKhoaHoc my-5">
        <h1 className="text-center mb-4">Danh sách khóa học</h1>
        <div className="container">
          <div className="row">{this.renderKhoaHocPhanTrang()}</div>
        </div>
        <div className="pagination mt-5">
          <button
            onClick={this.handleTrangTruoc}
            disabled={this.state.currentPage === 1 ? true : false}
            className="btn mr-2"
          >{`< Trang Trước`}</button>
          <button
            onClick={this.handleTrangSau}
            disabled={
              this.props.tongTrang === this.state.currentPage ? true : false
            }
            className="btn ml-2"
          >{`Trang Sau >`}</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchKhoaHocPhanTrang(this.state.currentPage));
  }
}

const mapStateToProps = (state) => {
  return {
    khoaHocPhanTrang: state.khoaHoc.khoaHocPhanTrang.items || [],
    tongTrang: state.khoaHoc.khoaHocPhanTrang.totalPages,
  };
};

export default connect(mapStateToProps)(HomeTemplate(TrangTatCaKhoaHoc));
