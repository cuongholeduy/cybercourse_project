import React, { Component } from "react";
import Slider from "react-slick";
import KhoaHocItem from "../KhoaHocItem/khoaHocItem";
import { connect } from "react-redux";
import { fetchDanhSachKhoaHoc } from "../../Redux/Action/khoaHoc";

class KhoaHocNoiBat extends Component {
  renderKhoaHocNoiBat = () => {
    const khoaHocNoiBat = [
      ...this.props.danhSachKhoaHoc.sort((a, b) => b.luotXem - a.luotXem),
    ];
    khoaHocNoiBat.splice(8);
    return khoaHocNoiBat.map((item, index) => {
      return (
        <div key={index} className="p-3">
          <KhoaHocItem item={item} />
        </div>
      );
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    };

    return (
      <div className="khoaHocNoiBat container">
        <h2>Khóa học nổi bật</h2>
        <Slider className="mt-5 container" {...settings}>
          {this.renderKhoaHocNoiBat()}
        </Slider>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchDanhSachKhoaHoc);
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachKhoaHoc: state.khoaHoc.danhSachKhoaHoc,
  };
};

export default connect(mapStateToProps)(KhoaHocNoiBat);
