import React, { Component } from "react";
import HomeTemplate from "../../Templates/homeTemplate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as yup from "yup";
import { dangNhap } from "../../Redux/Action/user";

const signinUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Tài khoản không được bỏ trống"),
  matKhau: yup.string().required("* Mật khẩu không được bỏ trống"),
});

class TrangDangNhap extends Component {
  handleSubmitDangNhap = (values) => {
    this.props.dispatch(
      dangNhap(values, () => {
        this.props.history.replace("/");
      })
    );
  };

  render() {
    return (
      <div className="trangDangNhap my-5 w-50 mx-auto">
        <h2 className="text-center font-weight-bold mb-5">Đăng Nhập</h2>
        <Formik
          validationSchema={signinUserSchema}
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          onSubmit={this.handleSubmitDangNhap}
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
              <div className="text-center mt-4">
                <button type="submit" className="btn">
                  Đăng Nhập
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default connect()(HomeTemplate(TrangDangNhap));
