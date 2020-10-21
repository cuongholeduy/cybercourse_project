import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { chonKhoaHoc, xoaKhoaHoc } from "../../Redux/Action/admin";
import Swal from "sweetalert2";

class AdminKhoaHocItem extends Component {
  handleXoaKhoaHoc = () => {
    Swal.fire({
      title: "Bạn chắc chắn muốn xóa?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Thoát",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.dispatch(
          xoaKhoaHoc(this.props.item.maKhoaHoc, () => {
            this.props.history.replace("/admin");
          })
        );
      }
    });
  };

  handleChonKhoaHoc = () => {
    this.props.dispatch(chonKhoaHoc(this.props.item));
  };

  render() {
    const { hinhAnh, tenKhoaHoc, ngayTao, nguoiTao } = this.props.item;
    return (
      <tr>
        <td>
          <img width="150px" height="100px" src={hinhAnh} alt={tenKhoaHoc} />
        </td>
        <td>{tenKhoaHoc}</td>
        <td>{nguoiTao.hoTen}</td>
        <td>{ngayTao}</td>
        <td>
          <button
            onClick={this.handleChonKhoaHoc}
            type="button"
            className="btn btn-success mr-1 mt-1"
          >
            <EditIcon />
          </button>
          <button
            onClick={this.handleXoaKhoaHoc}
            type="button"
            className="btn btn-danger mr-1 mt-1"
          >
            <DeleteIcon />
          </button>
        </td>
      </tr>
    );
  }
}

export default withRouter(connect()(AdminKhoaHocItem));
