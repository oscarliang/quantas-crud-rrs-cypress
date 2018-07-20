import React from "react";
import { connect } from "react-redux";
import validator from "validator";
import { saveCarService } from "../../service/car-service";
import { preload } from "../../service/preload";
import CarsTable from "../../components/common/DataTable/CarsTable"

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CardFooter,
  Button
} from "reactstrap";

const mapState = (state, ownProps) => ({
  allOfcars: state.cars,
  allCarListTag: state.fullOfCarList
});

const mapDispatch = (dispatch, ownProps) => ({
  saveCarService: (car) => {
    dispatch(saveCarService(car));
  },
  getAllCars:() => {
    dispatch(preload());
  }
});

class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: false,
      name: "",
      brand: "",
      drive2wd: false,
      drive4wd: false,
      driveawd: false,
      price: "",
      image: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    if (!this.props.allCarListTag)
      this.props.getAllCars();
  };

  static initialAction() {
    return preload()
  }

  handleSubmit = () => {
    let drive = "";
    drive += this.state.drive2wd ? "2wd|" : "";
    drive += this.state.drive4wd ? "4wd|" : "";
    drive += this.state.driveawd ? "awd|" : "";
    let car = {
      "brand": this.state.brand,
      "name": this.state.name,
      "price": this.state.price,
      "drive": drive,
      "imageUrl": this.state.image
    }
    this.props.saveCarService(car);
  };

  componentDidUpdate() {
    if (
      !this.state.valid &&
      this.state.name !== "" &&
      this.state.brand !== "" &&
      (this.state.drive2wd || this.state.drive4wd || this.state.driveawd)
    ) {
      this.setState({ valid: true })
    }

    if (
      this.state.valid &&
      (this.state.name === "" ||
        this.state.brand === "" ||
        (!this.state.drive2wd && !this.state.drive4wd && !this.state.driveawd))
    ) {
      this.setState({ valid: false })
    }
  }

  handleChange = (e) => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleCheckebox = (e) => {
    let change = {};
    change[e.target.name] = e.target.checked;
    this.setState(change);
  }

  handlePriceChange = (e) => {
    let change = {};
    let price = e.target.value;
    if (!validator.isNumeric(price)) {
      price = "";
    }
    change[e.target.name] = price;
    this.setState(change);
  }

  renderAddCar = () => {
    return (
      <Col>
        <Card>
          <CardHeader>
            <strong>Add</strong> Car
          </CardHeader>
          <CardBody>
            <Form action="" method="post" className="form-horizontal" innerRef={c => { this.form = c }}>
              <FormGroup row className="required">
                <Col md="3">
                  <Label htmlFor="hf-name required">Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="hf-name" name="name"
                    className={this.state.name === "" ? "is-invalid" : ""}
                    placeholder="Enter Car Name..."
                    onChange={this.handleChange.bind(this)}
                    value={this.state.name}
                  />
                  <FormText className="help-block">Please enter car name</FormText>
                </Col>
              </FormGroup>
              <FormGroup row className="required">
                <Col md="3">
                  <Label htmlFor="hf-brand">Brand</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="select"
                    name="brand"
                    id="hf-brand"
                    className={this.state.brand === "" ? "is-invalid" : ""}
                    onChange={this.handleChange.bind(this)}
                  >
                    <option value="">Please select</option>
                    <option value="PORSCHE">PORSCHE</option>
                    <option value="BMW">BMW</option>
                    <option value="AUDI">AUDI</option>
                  </Input>
                  <FormText className="help-block">Please enter car brand</FormText>
                </Col>
              </FormGroup>
              <FormGroup row className="required">
                <Col md="3">
                  <Label htmlFor="hf-drive">Drive</Label>
                </Col>
                <Col xs="12" md="9" className="required">
                  <Col md="9" className={!this.state.drive2wd && !this.state.drive4wd && !this.state.driveawd ? "is-invalid form-control" : ""}>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="checkbox" id="inline-2WD" name="drive2wd"
                        value={this.state.drive2wd}
                        onChange={this.handleCheckebox.bind(this)}
                      />
                      <Label className="form-check-label" check htmlFor="inline-2WD">2WD</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="checkbox" id="inline-4WD" name="drive4wd"
                        value={this.state.drive4wd}
                        onChange={this.handleCheckebox.bind(this)}
                      />
                      <Label className="form-check-label" check htmlFor="inline-4WD">4WD</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="checkbox" id="inline-AWD" name="driveawd"
                        value={this.state.driveawd}
                        onChange={this.handleCheckebox.bind(this)}
                      />
                      <Label className="form-check-label" check htmlFor="inline-AWD">AWD</Label>
                    </FormGroup>
                  </Col>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="hf-price">Price</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="hf-price" name="price" placeholder="Enter Price..."
                    onChange={this.handlePriceChange.bind(this)}
                    value={this.state.price} />
                  <FormText className="help-block">Please enter car price. <strong>Note</strong>: only allow input numbers</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="hf-image">Image Url</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="hf-image" name="image" placeholder="Enter Image Url..."
                    onChange={this.handleChange.bind(this)}
                    value={this.state.image} />
                  <FormText className="help-block">Please enter image url. <strong>Note</strong>: only allow web image url</FormText>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Button type="submit" size="sm" color="primary" disabled={!this.state.valid} onClick={this.handleSubmit}>
              <i className="fa fa-dot-circle-o"></i> Add Car
            </Button>
          </CardFooter>
        </Card>
      </Col>
    )
  }

  render() {
    return (
      <div className="homepage">
        <Row>
          {this.renderAddCar()}

          <CarsTable cars={this.props.allOfcars} />
        </Row>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(HomepageContainer);
