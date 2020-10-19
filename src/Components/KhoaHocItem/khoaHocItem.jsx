import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

class KhoaHocItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc } = this.props.item;
    return (
      <div className="khoaHocItem">
        <Card>
          <CardImg top width="100%" src={hinhAnh} alt="Card image cap" />
          <CardBody>
            <CardTitle>{tenKhoaHoc}</CardTitle>
          </CardBody>
          <Button>Chi Tiết</Button>
        </Card>
      </div>
    );
  }
}

export default KhoaHocItem;
