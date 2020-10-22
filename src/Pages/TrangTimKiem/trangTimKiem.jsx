import React, { Component } from "react";
import HomeTemplate from "../../Templates/homeTemplate";
import { connect } from "react-redux";
import { timKiemKhoaHoc } from "../../Redux/Action/khoaHoc";
import KhoaHocItem from "../../Components/KhoaHocItem/khoaHocItem";

class TrangTimKiem extends Component {
  renderKhoaHocTimKiem = () => {
    if (this.props.mangTimKiem.length) {
      return this.props.mangTimKiem.map((item, index) => {
        return (
          <div key={index} className="col-lg-3 col-sm-6 col-12 p-2">
            <KhoaHocItem item={item} />
          </div>
        );
      });
    } else {
      return (
        <p className="alert alert-danger w-100">
          * Không tìm thấy khóa học phù hợp với từ khóa
        </p>
      );
    }
  };

  render() {
    return (
      <div className="trangTimKiemKhoaHoc my-5">
        <h1 className="text-center mb-5">
          Tìm kiếm khóa học với từ khóa{" "}
          <span className="text-danger">{`"${this.props.match.params.tukhoa}"`}</span>
        </h1>
        <div className="container">
          <div className="row">{this.renderKhoaHocTimKiem()}</div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.tukhoa !== prevProps.match.params.tukhoa) {
      // call the fetch function again
      this.props.dispatch(timKiemKhoaHoc(this.props.match.params.tukhoa));
    }
  }

  componentDidMount() {
    this.props.dispatch(timKiemKhoaHoc(this.props.match.params.tukhoa));
  }
}

const mapStateToProps = (state) => {
  return {
    mangTimKiem: state.khoaHoc.mangTimKiem,
  };
};

export default connect(mapStateToProps)(HomeTemplate(TrangTimKiem));
