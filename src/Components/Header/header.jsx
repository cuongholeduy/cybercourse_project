import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import ReorderIcon from "@material-ui/icons/Reorder";
import { connect } from "react-redux";
import { fetchDanhMucKhoaHoc } from "../../Redux/Action/khoaHoc";
import { Link, withRouter } from "react-router-dom";
import DanhMucKhoaHoc from "../DanhMucKhoaHoc/danhMucKhoaHoc";
import Swal from "sweetalert2";

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleDangXuat = () => {
    localStorage.clear();

    Swal.fire({
      position: "center",
      title: "Đăng xuất thành công",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });

    setTimeout(() => {
      this.props.history.push("/");
      this.props.history.go("/");
    }, 1500);
  };

  renderDanhMucKhoaHoc = () => {
    return this.props.danhMucKhoaHoc.map((item, index) => {
      return <DanhMucKhoaHoc key={index} item={item} />;
    });
  };

  render() {
    return (
      <div className="header sticky-top">
        <Navbar className="container" expand="xl">
          <Link className="navbar-brand" to="/">
            Cyber<span>Course</span>
          </Link>
          <NavbarToggler onClick={this.toggle}>
            <ReorderIcon className="navbar-icon"></ReorderIcon>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/tatcakhoahoc">
                  Khóa học
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Danh mục
                </DropdownToggle>
                <DropdownMenu right className="mb-3">
                  {this.renderDanhMucKhoaHoc()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>

            {this.props.isLogin ? (
              <div className="navbar-button">
                <Link to="/thongtintaikhoan">
                  <button className="btn">Tài khoản</button>
                </Link>
                <button onClick={this.handleDangXuat} className="btn">
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div className="navbar-button">
                <Link to="/dangnhap">
                  <button className="btn">Đăng nhập</button>
                </Link>
                <Link to="/dangky">
                  <button className="btn">Đăng ký</button>
                </Link>
              </div>
            )}
          </Collapse>
        </Navbar>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchDanhMucKhoaHoc);
  }
}

const mapStateToProps = (state) => {
  return {
    danhMucKhoaHoc: state.khoaHoc.danhMucKhoaHoc,
    isLogin: !!state.user.token,
  };
};

export default withRouter(connect(mapStateToProps)(Header));
