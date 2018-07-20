import React from 'react';
import NumberFormat from "react-number-format"
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Table
} from "reactstrap";
import _ from "lodash";

class CarsTable extends React.Component {

  renderTableBody = () => {
    return _.values(this.props.cars).map((car, index) => {
      return (
        <tr key={index}>
          <td>
            <img
              src={car.imageUrl}
              className="rounded car-img animated bounceIn"
              alt={car.name}
            />
          </td>
          <td>{car.name}</td>
          <td>{car.brand.toUpperCase()}</td>
          <td>{_.replace(car.drive, /\|/g, ' ').toUpperCase()}</td>
          <td>
            <NumberFormat
              value={car.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <Col>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> All Cars
        </CardHeader>
          <CardBody>
            <Table hover bordered striped responsive size="sm">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTableBody()}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default CarsTable;