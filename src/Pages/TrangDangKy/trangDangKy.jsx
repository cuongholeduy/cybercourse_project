import React, { Component } from "react";
import HomeTemplate from "../../Templates/homeTemplate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { dangKyTaiKhoan } from "../../Redux/Action/user";

const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Tài khoản không được bỏ trống"),
  matKhau: yup
    .string()
    .required("* Mật khẩu không được bỏ trống")
    .min(6, "* Mật khẩu có ít nhất 6 ký tự"),
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

class TrangDangKy extends Component {
  handleSubmitDangKy = (values) => {
    console.log(values);
    this.props.dispatch(
      dangKyTaiKhoan(values, () => {
        this.props.history.push("/dangnhap");
      })
    );
  };

  render() {
    return (
      <div className="trangDangKy my-5 w-50 mx-auto">
        <h2 className="text-center font-weight-bold mb-5">Đăng Ký tài khoản</h2>
        <Formik
          validationSchema={signupUserSchema}
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: "",
            maNhom: "GP05",
          }}
          onSubmit={this.handleSubmitDangKy}
          component={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài khoản:</label>
                <Field
                  className="form-control"
                  type="text"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mật khẩu:</label>
                <Field
                  className="form-control"
                  type="password"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="matKhau">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Họ tên:</label>
                <Field
                  className="form-control"
                  type="text"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="hoTen">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Email:</label>
                <Field
                  className="form-control"
                  type="text"
                  name="email"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="email">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Số điện thoại:</label>
                <Field
                  className="form-control"
                  type="text"
                  name="soDT"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="soDT">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="btn">
                  Đăng Ký
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default connect()(HomeTemplate(TrangDangKy));
