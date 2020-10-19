import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

class GiangVienItem extends Component {
  render() {
    const { tenGiangVien, hinhAnh } = this.props.item;
    return (
      <div className="giangVienItem">
        <Card>
          <CardImg top width="100%" src={hinhAnh} alt="Card image cap" />
          <CardBody>
            <CardTitle>{tenGiangVien}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default GiangVienItem;
