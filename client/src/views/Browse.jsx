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
import React from "react";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import BrowseProfiles from "components/BrowseProfiles.jsx";
import Map from "components/Map.jsx";
import store from "store";
import { getUsersFromService } from "../actions/browseActions"
import "assets/css/scroll-enable.css";
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

function getWidth() {
  return window.innerWidth;
}

function getHeight() {
  return window.innerHeight;
}

class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredUsers: {},
      width: 800,
      height: 600
    };
  }


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

  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));

    var reduxState = store.getState();
    var users = await getUsersFromService({ service: reduxState.browse.service });
    this.setState({ filteredUsers: users });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    document.body.style.overflow = "visible";
  }

  updateDimensions() {
    let updateWidth = getWidth();
    let updateHeight = getHeight();
    this.setState({ width: updateWidth, height: updateHeight });
  }

  getUserData() {

  }

  render() {
    document.body.style.overflow = "hidden";
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-shaped pb-4">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </section>
          </div>
          <section className="section pt-4">
            <div className="px-4">
              <Row>
                <Col xs="6" md="3">
                  <FormGroup>
                    <InputGroup className="mb-4" onChange={this.handleLocation}>
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
                    <InputGroup className="mb-4" onChange={this.handleLocation}>
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
              <Row className="enableScroll">
                <Col className="pr-0 enableScroll" md="4">
                  <BrowseProfiles
                    height={this.state.height}
                    width={this.state.width}
                    userData={this.state.filteredUsers}
                  />
                </Col>
                <Col className="pl-1" md="8">
                  <Map
                    height={this.state.height}
                    width={this.state.width}
                    userData={this.state.filteredUsers}
                  ></Map>
                </Col>
              </Row>
            </div>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Browse;
