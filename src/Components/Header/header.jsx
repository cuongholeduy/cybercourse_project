import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { fetchDanhMucKhoaHoc } from "../../Redux/Action/khoaHoc";

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  renderDanhMucKhoaHoc = () => {
    return this.props.danhMucKhoaHoc.map((item, index) => {
      return (
        <Fragment key={index}>
          <DropdownItem>{item.tenDanhMuc}</DropdownItem>
          <DropdownItem divider />
        </Fragment>
      );
    });
  };

  render() {
    return (
      <div className="header sticky-top">
        <Navbar className="container" expand="xl">
          <NavbarBrand href="/">
            Cyber<span>Course</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <ReorderIcon className="navbar-icon"></ReorderIcon>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Khóa học</NavLink>
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
            <div className="input-group mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm khóa học"
              />
              <div className="input-group-append">
                <button className="btn" type="submit">
                  <SearchIcon className="search-icon" />
                </button>
              </div>
            </div>
            <div className="navbar-button mt-2">
              <button className="btn">Đăng nhập</button>
              <button className="btn">Đăng ký</button>
            </div>
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
  };
};

export default connect(mapStateToProps)(Header);
