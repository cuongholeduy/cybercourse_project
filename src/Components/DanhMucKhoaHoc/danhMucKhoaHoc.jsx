import React, { Component } from "react";
import { DropdownItem } from "reactstrap";
import { withRouter } from "react-router-dom";

class DanhMucKhoaHoc extends Component {
  handleXemDanhMuc = () => {
    this.props.history.push("/danhmuc/" + this.props.item.maDanhMuc);
  };

  render() {
    return (
      <div className="danhMucKhoaHoc">
        <DropdownItem onClick={this.handleXemDanhMuc}>
          {this.props.item.tenDanhMuc}
        </DropdownItem>
        <DropdownItem divider />
      </div>
    );
  }
}

export default withRouter(DanhMucKhoaHoc);
