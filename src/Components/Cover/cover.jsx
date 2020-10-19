import React, { Component } from "react";

class Cover extends Component {
  render() {
    return (
      <div className="cover text-center d-flex justify-content-center align-items-center">
        <div className="cover__content text-center">
          <div className="cover__content__heading">
            <h2>Hàng ngàn khóa học</h2>
            <h2>cho bạn lựa chọn</h2>
          </div>
          <button className="btn">Xem khóa học</button>
        </div>
      </div>
    );
  }
}

export default Cover;
