import React from "react";
import { connect } from "react-redux";
import { findCarService } from "../../service/car-service";
import { preload } from "../../service/preload";
import CarsTable from "../../components/common/DataTable/CarsTable"

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import _ from "lodash";

const mapState = (state, ownProps) => ({
  allOfcars: state.cars
});

const mapDispatch = (dispatch, ownProps) => ({
  findCarService: (filter) => {
    dispatch(findCarService(filter));
  },
  getAllCars: () => {
    dispatch(preload());
  }
});

class SearchPageContainer extends React.Component {
  constructor (props) {
    super(props);

    let initState = {
      valid: false,
      name: "",
      brand: "",
      drive2wd: false,
      drive4wd: false,
      driveawd: false,
      filter: ""
    };

    this.state = initState;
  }

  static initialAction() {
    return preload()
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    if (
      !this.state.valid &&
      (
        (this.state.name !== "" && this.state.filter === "name") ||
        (this.state.brand !== "" && this.state.filter === "brand") ||
        ((this.state.drive2wd || this.state.drive4wd || this.state.driveawd) && this.state.filter === "drive")
      )
    ) {
      this.setState({ valid: true })
    }

    if (
      this.state.valid &&
      (
        (this.state.name === "" && this.state.filter === "name") ||
        (this.state.brand === "" && this.state.filter === "brand") ||
        (!this.state.drive2wd && !this.state.drive4wd && !this.state.driveawd && this.state.filter === "drive")
      )
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

  onClickReset = () => {
    this.props.getAllCars();
  }

  onClickSearch = () => {
    let filter = {
      "key": this.state.filter
    }
    switch (this.state.filter) {
      case "name":
        filter["value"] = this.state.name
        break;
      case "brand":
        filter["value"] = this.state.brand
        break;
      case "drive":
        let drive = "";
        drive += this.state.drive2wd ? "2wd|" : "";
        drive += this.state.drive4wd ? "4wd|" : "";
        drive += this.state.driveawd ? "awd|" : "";
        filter["value"] = drive
        break;
    }
    this.props.findCarService(filter);
  }

  renderFilters = () => {
    let filters = ["name", "brand", "drive"]
    return _.map(filters, (filter, index) => {
      return (
        <option key={index} value={filter}>
          {filter}
        </option>
      );
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Col xs="12">
          <Card>
            <CardHeader>
              <strong>Car Search</strong>
              <small> Form</small>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12" sm="4">
                  <FormGroup>
                    <Label htmlFor="">Filter By</Label>
                    <Input
                      type="select"
                      name="filter"
                      id="filter"
                      value={this.state.filter}
                      onChange={this.handleChange.bind(this)}
                    >
                      <option value="">Please select</option>
                      {this.renderFilters()}
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="12" sm="4">
                  <FormGroup>
                    <Label htmlFor="">Filter Value</Label>
                    <Input
                      type="text"
                      name="name"
                      id="hf-name"
                      className={this.state.filter === "name" ? "animated fadeIn" : "d-none"}
                      value={this.state.name}
                      onChange={this.handleChange.bind(this)}
                    >
                    </Input>
                    <Input
                      type="select"
                      name="brand"
                      id="hf-brand"
                      className={this.state.filter === "brand" ? "animated fadeIn" : "d-none"}
                      onChange={this.handleChange.bind(this)}
                    >
                      <option value="">Please select</option>
                      <option value="PORSCHE">PORSCHE</option>
                      <option value="BMW">BMW</option>
                      <option value="AUDI">AUDI</option>
                    </Input>
                    <Col md="9" className={this.state.filter === "drive" ? "animated fadeIn" : "d-none"}>
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
                  </FormGroup>
                </Col>
                <Col xs="12" sm="4">
                  <FormGroup>
                    <Label htmlFor="">&nbsp;</Label>
                    <div>
                      <Button
                        type="submit"
                        color="primary"
                        disabled={!this.state.valid}
                        onClick={this.onClickSearch}
                      >
                        Search
                        </Button>
                      <Button
                        type="reset"
                        className="ml-3"
                        color="danger"
                        onClick={this.onClickReset}
                      ><i className="fa fa-ban"></i> Reset</Button>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        <CarsTable cars={this.props.allOfcars} />
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(SearchPageContainer);
