import React, { Component } from "react";
import { connect } from "react-redux";
import {
  chinhSuaNguoiDung,
  hideModalNguoiDung,
  khongChonNguoiDung,
  themNguoiDung,
} from "../../Redux/Action/admin";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

const themNguoiDungSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Tài khoản không được bỏ trống"),
  matKhau: yup.string().required("* Mật khẩu không được bỏ trống"),
  hoTen: yup.string().required("* Họ tên không được bỏ trống"),
  email: yup
    .string()
    .required("* Email không được bỏ trống")
    .email("* Email không hợp lệ"),
  soDT: yup
    .string()
    .required("* Số điện thoại không được bỏ trống")
    .matches(/^[0-9]+$/, "* Sđt phải là số"),
});

class ModalNguoiDung extends Component {
  handleHideModalNguoiDung = () => {
    this.props.dispatch(hideModalNguoiDung);
  };

  handleXacNhan = (value) => {
    if (this.props.isSelected) {
      // console.log("thêm user");
      this.props.dispatch(
        themNguoiDung(value, () => {
          this.props.history.replace("/admin");
        })
      );
    } else {
      // console.log("Chỉnh sửa user");
      console.log(value);
      this.props.dispatch(
        chinhSuaNguoiDung(value, () => {
          this.props.history.replace("/admin");
        })
      );
    }
  };

  render() {
    return (
      <Fade top>
        <div className="modalNguoiDung">
          <div className="modalNguoiDung__content bg-white w-50 mx-auto px-5 pb-3 rounded ">
            <Formik
              validationSchema={themNguoiDungSchema}
              initialValues={{
                taiKhoan: this.props.nguoiDungDuocChon.taiKhoan,
                matKhau: this.props.nguoiDungDuocChon.matKhau,
                hoTen: this.props.nguoiDungDuocChon.hoTen,
                email: this.props.nguoiDungDuocChon.email,
                soDT: this.props.nguoiDungDuocChon.soDT,
                maNhom: "GP05",
                maLoaiNguoiDung: "GV",
              }}
              onSubmit={this.handleXacNhan}
              component={(formikProps) => {
                return (
                  <Form className="text-dark mt-3">
                    <div className="form-group">
                      <label>Tài Khoản:</label>
                      <Field
                        disabled={this.props.isSelected ? false : true}
                        name="taiKhoan"
                        type="text"
                        className="form-control"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="taiKhoan">
                        {(msg) => <div className="text-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Mật Khẩu:</label>
                      <Field
                        name="matKhau"
                        type="text"
                        className="form-control"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="matKhau">
                        {(msg) => <div className="text-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Họ Tên:</label>
                      <Field
                        name="hoTen"
                        onChange={formikProps.handleChange}
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="hoTen">
                        {(msg) => <div className="text-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <Field
                        name="email"
                        onChange={formikProps.handleChange}
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="email">
                        {(msg) => <div className="text-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Số Điện Thoại:</label>
                      <Field
                        name="soDT"
                        onChange={formikProps.handleChange}
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="soDT">
                        {(msg) => <div className="text-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Loại Người Dùng:</label>
                      <Field
                        component="select"
                        onChange={formikProps.handleChange}
                        name="maLoaiNguoiDung"
                        className="form-control"
                      >
                        <option>GV</option> <option>HV</option>
                      </Field>
                    </div>
                    <button type="submit" className="btn btn-success mr-2">
                      Xác nhận
                    </button>
                    <button
                      onClick={this.handleHideModalNguoiDung}
                      type="button"
                      className="btn btn-danger"
                    >
                      Hủy bỏ
                    </button>
                  </Form>
                );
              }}
            />
          </div>
        </div>
      </Fade>
    );
  }

  componentWillUnmount() {
    this.props.dispatch(khongChonNguoiDung);
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungDuocChon: state.admin.nguoiDungDuocChon || {
      taiKhoan: "",
      hoTen: "",
      soDT: "",
      email: "",
    },
    isSelected: !state.admin.nguoiDungDuocChon,
  };
};

export default withRouter(connect(mapStateToProps)(ModalNguoiDung));
