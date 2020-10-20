import React, { Component } from "react";
import HomeTemplate from "../../Templates/homeTemplate";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { capNhatThongTin } from "../../Redux/Action/user";
import KhoaHocDaDangKy from "../../Components/KhoaHocDaDangKy/khoaHocDaDangKy";

const updateUserSchema = yup.object().shape({
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

class TrangThongTinTaiKhoan extends Component {
  handleCapNhatTaiKhoan = (value) => {
    this.props.dispatch(
      capNhatThongTin(value, () => {
        this.props.history.push("/");
      })
    );
  };

  render() {
    return (
      <div className="trangThongTinTaiKhoan my-5 container">
        <h2 className="text-center font-weight-bold mb-5">
          Thông tin tài khoản
        </h2>
        <div className="container">
          <Formik
            validationSchema={updateUserSchema}
            initialValues={{
              taiKhoan: this.props.thongTinTaiKhoan.taiKhoan,
              matKhau: "",
              hoTen: this.props.thongTinTaiKhoan.hoTen,
              email: this.props.thongTinTaiKhoan.email,
              soDT:
                this.props.thongTinTaiKhoan.soDT ||
                this.props.thongTinTaiKhoan.soDt,
              maLoaiNguoiDung: this.props.thongTinTaiKhoan.maLoaiNguoiDung,
              maNhom: "GP05",
            }}
            onSubmit={this.handleCapNhatTaiKhoan}
            component={(formikProps) => (
              <Form className="w-100">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Tài khoản: </label>
                      <Field
                        disabled
                        className="form-control"
                        type="text"
                        name="taiKhoan"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Họ tên: </label>
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
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Email: </label>
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
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Số điện thoại: </label>
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
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Mật khẩu: </label>
                      <Field
                        name="matKhau"
                        className="form-control"
                        type="password"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="matKhau">
                        {(msg) => <div className="text-danger">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn">
                    Cập Nhật Thông Tin
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
        <hr className="container" />
        <KhoaHocDaDangKy />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    thongTinTaiKhoan: state.user.thongTinUser,
  };
};

export default connect(mapStateToProps)(HomeTemplate(TrangThongTinTaiKhoan));
