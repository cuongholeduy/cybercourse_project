import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class KhoaHocItem extends Component {
  handleXemChiTiet = () => {
    this.props.history.push("/chitietkhoahoc/" + this.props.item.maKhoaHoc);
  };

  render() {
    const { hinhAnh, tenKhoaHoc } = this.props.item;
    return (
      <div className="khoaHocItem">
        <Card>
          <CardImg top width="100%" src={hinhAnh} alt="Card image cap" />
          <CardBody>
            <CardTitle>{tenKhoaHoc}</CardTitle>
          </CardBody>
          <Button onClick={this.handleXemChiTiet}>Chi Tiết</Button>
        </Card>
      </div>
    );
  }
}

export default withRouter(KhoaHocItem);
