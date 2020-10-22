import React, { Component } from "react";
import Hometemplate from "../../Templates/homeTemplate";
import { connect } from "react-redux";
import { fetchKhoaHocTheoDanhMuc } from "../../Redux/Action/khoaHoc";
import KhoaHocItem from "../../Components/KhoaHocItem/khoaHocItem";

class TrangKhoaHocDanhMuc extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.madanhmuc !== prevProps.match.params.madanhmuc
    ) {
      // call the fetch function again
      this.props.dispatch(
        fetchKhoaHocTheoDanhMuc(this.props.match.params.madanhmuc)
      );
    }
  }

  renderKhoaHocDanhMuc = () => {
    return this.props.khoaHocDanhMuc.map((item, index) => {
      return (
        <div key={index} className="col-lg-3 col-sm-6 col-12 p-2">
          <KhoaHocItem item={item} />
        </div>
      );
    });
  };

  renderTenDanhMuc = () => {
    let phanTuDauTien = [...this.props.khoaHocDanhMuc];
    phanTuDauTien.splice(1);
    return phanTuDauTien.map((item, index) => {
      return (
        <h1 key={index} className="text-center mb-4">
          {item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
        </h1>
      );
    });
  };

  render() {
    return (
      <div className="trangKhoaHocDanhMuc my-5">
        {this.renderTenDanhMuc()}
        <div className="container">
          <div className="row">{this.renderKhoaHocDanhMuc()}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const maDanhMuc = this.props.match.params.madanhmuc;
    this.props.dispatch(fetchKhoaHocTheoDanhMuc(maDanhMuc));
  }
}

const mapStateToProps = (state) => {
  return {
    khoaHocDanhMuc: state.khoaHoc.khoaHocDanhMuc,
  };
};

export default connect(mapStateToProps)(Hometemplate(TrangKhoaHocDanhMuc));
