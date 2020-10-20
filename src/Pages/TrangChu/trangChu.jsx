import React, { Component } from "react";
import Banner from "../../Components/Banner/banner";
import Cover from "../../Components/Cover/cover";
import DoiNguGianVien from "../../Components/DoiNguGiangVien/doiNguGiangVien";
import KhoaHocNoiBat from "../../Components/KhoaHocNoiBat/khoaHocNoiBat";
import HomeTemplate from "../../Templates/homeTemplate";

class TrangChu extends Component {
  render() {
    return (
      <div>
        <Cover />
        <Banner />
        <KhoaHocNoiBat />
        <DoiNguGianVien />
      </div>
    );
  }
}

export default HomeTemplate(TrangChu);
