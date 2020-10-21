import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  chinhSuaKhoaHoc,
  hideModalKhoaHoc,
  khongChonKhoaHoc,
  themKhoaHoc,
} from "../../Redux/Action/admin";
import Fade from "react-reveal/Fade";

const themKhoaHocSchema = yup.object().shape({
  maKhoaHoc: yup.string().required("* Mã khóa học không được bỏ trống"),
  biDanh: yup.string().required("* Bí danh không được bỏ trống"),
  tenKhoaHoc: yup.string().required("* Tên khóa học không được bỏ trống"),
  moTa: yup.string().required("* Mô tả không được bỏ trống"),
  hinhAnh: yup.string().required("* Hình ảnh không được bỏ trống"),
  maDanhMucKhoaHoc: yup.string().required("* Danh mục không được bỏ trống"),
});

class ModalKhoaHoc extends Component {
  handleXacNhan = (value) => {
    let khoaHoc = { ...value };
    khoaHoc.hinhAnh = khoaHoc.hinhAnh.name;
    // console.log(value, khoaHoc);
    if (this.props.isSelected) {
      // console.log("thêm khóa học");

      //khoaHoc: hình ảnh là tên hình ảnh (string)
      //value: hình ảnh là đối tượng hình ảnh (object)
      this.props.dispatch(
        themKhoaHoc(value, khoaHoc, () => {
          this.props.history.replace("/admin");
        })
      );
    } else {
      // console.log("Sửa khóa học");
      this.props.dispatch(
        chinhSuaKhoaHoc(value, khoaHoc, () => {
          this.props.history.replace("/admin");
        })
      );
    }
  };

  handleHuyBo = () => {
    this.props.dispatch(hideModalKhoaHoc);
  };

  renderDanhMucKhoaHoc = () => {
    return this.props.danhMucKhoaHoc.map((item, index) => {
      return (
        <option key={index} value={item.maDanhMuc}>
          {item.maDanhMuc}
        </option>
      );
    });
  };

  render() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;

    let user = JSON.parse(localStorage.getItem("user"));
    let taiKhoanNguoiTao = user.taiKhoan;

    return (
      <Fade top>
        <div className="modalKhoaHoc">
          <div className="modalKhoaHoc__content bg-white w-50 mx-auto px-5 pb-3 rounded">
            <Formik
              validationSchema={themKhoaHocSchema}
              initialValues={{
                maKhoaHoc: this.props.khoaHocDuocChon.maKhoaHoc, //
                biDanh: this.props.khoaHocDuocChon.biDanh, //
                tenKhoaHoc: this.props.khoaHocDuocChon.tenKhoaHoc, //
                moTa: this.props.khoaHocDuocChon.moTa, //
                luotXem: 0, //
                danhGia: 0, //
                hinhAnh: "", //
                maNhom: "GP05", //
                ngayTao: today, //
                maDanhMucKhoaHoc: "",
                taiKhoanNguoiTao: taiKhoanNguoiTao, //
              }}
              onSubmit={this.handleXacNhan}
              component={({ handleChange, setFieldValue }) => (
                <Form className="text-dark mt-3">
                  <div className="form-group">
                    <label>Mã Khóa Học:</label>
                    <Field
                      disabled={this.props.isSelected ? false : true}
                      name="maKhoaHoc"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <ErrorMessage name="maKhoaHoc">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Tên Khóa Học:</label>
                    <Field
                      name="tenKhoaHoc"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <ErrorMessage name="tenKhoaHoc">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Danh Mục:</label>
                    <Field
                      name="maDanhMucKhoaHoc"
                      component="select"
                      className="form-control"
                      onChange={handleChange}
                    >
                      <option></option>
                      {this.renderDanhMucKhoaHoc()}
                    </Field>
                    <ErrorMessage name="maDanhMucKhoaHoc">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Bí Danh: </label>
                    <Field
                      name="biDanh"
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage name="biDanh">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="form-group">
                    <label>Lượt Xem:</label>
                    <Field
                      name="luotXem"
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Đánh Giá:</label>
                    <Field
                      name="danhGia"
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Mô Tả:</label>
                    <Field
                      component="textarea"
                      name="moTa"
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                    <ErrorMessage name="moTa">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Hình Ảnh</label>
                    <input
                      name="hinhAnh"
                      onChange={(event) => {
                        setFieldValue("hinhAnh", event.currentTarget.files[0]);
                      }}
                      type="file"
                      className="form-control"
                    />
                    <ErrorMessage name="hinhAnh">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <button type="submit" className="btn btn-success mr-2">
                    Xác nhận
                  </button>
                  <button
                    onClick={this.handleHuyBo}
                    type="button"
                    className="btn btn-danger"
                  >
                    Hủy bỏ
                  </button>
                </Form>
              )}
            />
          </div>
        </div>
      </Fade>
    );
  }

  componentWillUnmount() {
    this.props.dispatch(khongChonKhoaHoc);
  }
}

const mapStateTopProps = (state) => {
  return {
    danhMucKhoaHoc: state.admin.adminDanhMucKhoaHoc,
    khoaHocDuocChon: state.admin.khoaHocDuocChon || {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      biDanh: "",
      luotXem: 0,
      danhGia: 0,
      moTa: "",
    },
    isSelected: !state.admin.khoaHocDuocChon,
  };
};

export default withRouter(connect(mapStateTopProps)(ModalKhoaHoc));
