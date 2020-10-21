import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { chonNguoiDung, xoaNguoiDung } from "../../Redux/Action/admin";

class NguoiDungItem extends Component {
  handleXoaNguoiDung = () => {
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
          xoaNguoiDung(this.props.item.taiKhoan, () => {
            this.props.history.replace("/admin");
          })
        );
      }
    });
  };

  handleChonNguoiDung = () => {
    this.props.dispatch(chonNguoiDung(this.props.item));
  };

  render() {
    const { taiKhoan, hoTen, email, soDT, tenLoaiNguoiDung } = this.props.item;
    return (
      <tr>
        <td>{taiKhoan}</td>
        <td>{hoTen}</td>
        <td>{email}</td>
        <td>{soDT}</td>
        <td>{tenLoaiNguoiDung}</td>
        <td>
          <button
            type="button"
            onClick={this.handleChonNguoiDung}
            className="btn btn-success mr-1 mt-1"
          >
            <EditIcon />
          </button>
          <button
            type="button"
            onClick={this.handleXoaNguoiDung}
            className="btn btn-danger mr-1 mt-1"
          >
            <DeleteIcon />
          </button>
        </td>
      </tr>
    );
  }
}

export default connect()(withRouter(NguoiDungItem));
