/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Row,
  Col,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

class BrowseFilter extends React.Component {
    state = {};

    handleReactDatetimeChange = (who, date) => {
        if (
          this.state.startDate &&
          who === "endDate" &&
          new Date(this.state.startDate._d + "") > new Date(date._d + "")
        ) {
          this.setState({
            startDate: date,
            endDate: date
          });
        } else if (
          this.state.endDate &&
          who === "startDate" &&
          new Date(this.state.endDate._d + "") < new Date(date._d + "")
        ) {
          this.setState({
            startDate: date,
            endDate: date
          });
        } else {
          this.setState({
            [who]: date
          });
        }
      };
      getClassNameReactDatetimeDays = date => {
        if (this.state.startDate && this.state.endDate) {
        }
        if (
          this.state.startDate &&
          this.state.endDate &&
          this.state.startDate._d + "" !== this.state.endDate._d + ""
        ) {
          if (
            new Date(this.state.endDate._d + "") > new Date(date._d + "") &&
            new Date(this.state.startDate._d + "") < new Date(date._d + "")
          ) {
            return " middle-date";
          }
          if (this.state.endDate._d + "" === date._d + "") {
            return " end-date";
          }
          if (this.state.startDate._d + "" === date._d + "") {
            return " start-date";
          }
        }
        return "";
      };
      
  render() {
    return (
      <>
        <Row>
          <Col xs="6" md="3">
            <FormGroup>
              <InputGroup className="mb-4" onChange = {this.handleLocation}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-map-marker" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Adres" type="text" />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs="6" md="3">
            <FormGroup>
              <InputGroup className="mb-4" onChange = {this.handleLocation}>
                <Input type="select" name="service-type" id="service-type">
                  <option>Schoonmaak</option>
                  <option>Katoppas</option>
                  <option>Hondenuitlaat</option>
                  <option>Babysitter</option>
                  <option>Bijles</option>
                  <option>Klusjesman</option>
                  <option>IT Hulp</option>
                  <option>Tuinier</option>
                  <option>Muziekles</option>
                </Input>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs="6" md="3">
            <FormGroup className="focused">
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Start Datum"
                  }}
                  value={this.state.startDate}
                  timeFormat={false}
                  onChange={e =>
                    this.handleReactDatetimeChange("startDate", e)
                  }
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    classes += this.getClassNameReactDatetimeDays(
                    currentDate
                    );
                    return (
                    <td {...props} className={classes}>
                      {currentDate.date()}
                    </td>
                    );
                  }}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs="6" md="3">
            <FormGroup className="focused">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Eind Datum"
                  }}
                  className="rdtPickerOnRight"
                  value={this.state.endDate}
                  timeFormat={false}
                  onChange={e =>
                    this.handleReactDatetimeChange("endDate", e)
                  }
                  renderDay={(props, currentDate, selectedDate) => {
                    let classes = props.className;
                    classes += this.getClassNameReactDatetimeDays(
                    currentDate
                    );
                    return (
                    <td {...props} className={classes}>
                      {currentDate.date()}
                    </td>
                    );
                  }}
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default BrowseFilter;
