import React, { Component } from "react";
import Banner from "../../Components/Banner/banner";
import Cover from "../../Components/Cover/cover";
import DoiNguGianVien from "../../Components/DoiNguGiangVien/doiNguGiangVien";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import KhoaHocNoiBat from "../../Components/KhoaHocNoiBat/khoaHocNoiBat";

class TrangChu extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cover />
        <Banner />
        <KhoaHocNoiBat />
        <DoiNguGianVien />
        <Footer />
      </div>
    );
  }
}

export default TrangChu;
