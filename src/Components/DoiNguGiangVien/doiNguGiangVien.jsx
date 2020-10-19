import React, { Component } from "react";
import GiangVienItem from "../GiangVienItem/giangVienItem";
import giangVien1 from "../../Assets/Images/t1.jpg";
import giangVien2 from "../../Assets/Images/t2.jpg";
import giangVien3 from "../../Assets/Images/t3.jpg";
import giangVien4 from "../../Assets/Images/t4.jpg";

const data = [
  { tenGiangVien: "Jane", hinhAnh: giangVien1 },
  { tenGiangVien: "Jonas", hinhAnh: giangVien2 },
  { tenGiangVien: "Emily", hinhAnh: giangVien3 },
  { tenGiangVien: "Daisy", hinhAnh: giangVien4 },
];

class DoiNguGianVien extends Component {
  renderGiangVien = () => {
    return data.map((item, index) => {
      return (
        <div key={index} className="col-lg-3 col-sm-6 col-12">
          <GiangVienItem item={item} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="doiNguGiangVien">
        <h2>Đội ngũ giảng viên</h2>
        <div className="doiNguGiangVien__content container mt-5">
          <div className="row text-center">{this.renderGiangVien()}</div>
        </div>
      </div>
    );
  }
}

export default DoiNguGianVien;
