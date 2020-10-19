import React, { Component } from "react";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner__content pt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-12">
                <AddToHomeScreenIcon className="banner-icon" />
                <p>Truy cập trên nhiều thiết bị</p>
              </div>
              <div className="col-lg-4 col-sm-4 col-12">
                <BeenhereIcon className="banner-icon" />
                <p>Khóa học chất lượng cao</p>
              </div>
              <div className="col-lg-4 col-sm-4 col-12">
                <AllInclusiveIcon className="banner-icon" />
                <p>Hỗ trợ trọn đời</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
