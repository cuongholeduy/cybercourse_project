import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer sticky py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-12 footer__right mb-3">
              <ul>
                <li>
                  <Link to="/">Chính sách bảo mật</Link>
                </li>
                <li>
                  <Link to="/">Điều khoản sử dụng</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-6 col-12 footer__brand">
              <h4 className="font-weight-bold">
                Cyber<span>Course</span>
              </h4>
              <p>Copyright @ 2020 CyberCourse. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
