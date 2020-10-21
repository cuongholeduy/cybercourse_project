import React, { Component } from "react";
import { DropdownItem } from "reactstrap";
import { Link, withRouter } from "react-router-dom";

class AdminSidebar extends Component {
  render() {
    return (
      <div class="adminSidebar">
        <h2 className="text-center">Dashboard</h2>
        <DropdownItem divider className="mt-3" />
        <div className="adminSidebar__item mt-5 text-center">
          <Link
            className={
              this.props.match.path === "/admin/quanlynguoidung" ? "active" : ""
            }
            to="/admin/quanlynguoidung"
          >
            Quản lý người dùng
          </Link>
          <Link
            className={
              this.props.match.path === "/admin/quanlykhoahoc" ? "active" : ""
            }
            to="/admin/quanlykhoahoc"
          >
            Quản ký khóa học
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminSidebar);
