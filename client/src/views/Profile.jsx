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

// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Badge,
  Card,
  CardBody,
  Container,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Progress,
  UncontrolledTooltip
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import store from "../store";
import { logoutUser } from "../actions/authActions";
import 'assets/css/custom-location.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      iconTabs: 1
    };
    this.toggleNavs = this.toggleNavs.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  handleLogout(e) {
    e.preventDefault();
    logoutUser();
  }

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };

  render() {
    var reduxState = store.getState();
    var name = reduxState.auth.user.name;

    return (
      <>
        <MainNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile invis-card mt--300">
                <Row className="justify-content-center">
                  <Col lg="12">
                    {/* Tabs with icons */}
                    <div className="nav-wrapper pt-0">
                      <Nav
                        className="nav-fill flex-md-row"
                        id="tabs-icons-text"
                        pills
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            aria-selected={this.state.iconTabs === 1}
                            className={classnames("mr-3 mb-md-0", {
                              active: this.state.iconTabs === 1
                            })}
                            onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                            href="#pablo"
                            role="tab"
                          >
                            <i className="fa fa-user mr-2" />
                            Profile
                        </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-selected={this.state.iconTabs === 2}
                            className={classnames("mr-3 mb-md-0", {
                              active: this.state.iconTabs === 2
                            })}
                            onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                            href="#pablo"
                            role="tab"
                          >
                            <i className="fa fa-exchange mr-2" />
                            Connections
                        </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-selected={this.state.iconTabs === 3}
                            className={classnames("mb-md-0", {
                              active: this.state.iconTabs === 3
                            })}
                            onClick={e => this.toggleNavs(e, "iconTabs", 3)}
                            href="#pablo"
                            role="tab"
                          >
                            <i className="fa fa-comment mr-2" />
                            Messages
                        </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                    <Card className="shadow">
                      <CardBody>
                        <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                          <TabPane tabId="iconTabs1">
                            <Row className="justify-content-center">
                              <Col lg="4">
                                <div className="card-profile-stats d-flex justify-content-left">
                                  <h5><Badge color="primary">Katoppas</Badge></h5>
                                  <h5><Badge className="ml-2" color="primary">Hondoppas</Badge></h5>
                                  <h5><Badge className="ml-2" color="primary">IT-hulp</Badge></h5>
                                </div>
                              </Col>
                              <Col className="justify-content-center" lg="3">
                                <div className="card-profile-image">
                                  <a href="#pablo" onClick={e => e.preventDefault()}>
                                    <img
                                      alt="..."
                                      className="rounded-circle"
                                      src={require("assets/img/theme/team-4-800x800.jpg")}
                                    />
                                  </a>
                                </div>
                              </Col>
                              <Col lg="4">
                                <div className="card-profile-stats">
                                  <Button
                                    className="float-right"
                                    color="default"
                                    href="#pablo"
                                    onClick={this.handleLogout}
                                    size="sm"
                                  >
                                    Logout
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                            <div className="text-center mt-5">
                              <h3>
                                {name}{" "}
                                <span className="font-weight-light">, 27</span>
                              </h3>
                              <div className="h6 font-weight-300">
                                <i className="ni location_pin mr-2" />
                                Bucharest, Romania
                              </div>
                              <div className="h6 mt-4">
                                <i className="ni business_briefcase-24 mr-2" />
                                Katoppas
                              </div>
                              <div>
                                <i className="ni education_hat mr-2" />
                                3 jaar ervaring
                              </div>
                            </div>
                            <div className="mt-5 py-5 border-top text-center">
                              <Row className="justify-content-center">
                                <Col lg="9">
                                  <p>
                                    Mijn grootste passie is katten! Het liefst ben ik elke dag de hele dag omringt met ze. Ik heb er natuurlijk zelf ook een aantal, namelijk Henk en Sjaak. Maar alsnog pas ik heel graag op bij andere katten! Meer zielen meer vreugd zeg maar. Als ik je kan helpen, stuur me dan een berichtje.
                                  </p>
                                </Col>
                              </Row>
                            </div>
                            <Row className="justify-content-center">
                              <Button>
                                Edit Profile...
                              </Button>
                            </Row>
                            <div id="progress-bar" className="progress-wrapper">
                              <div className="progress-info">
                                <div className="progress-label">
                                  <span>Profile completion</span>
                                </div>
                                <div className="progress-percentage">
                                  <span>40%</span>
                                </div>
                              </div>
                              <Progress max="100" value="40" />
                            </div>
                            <UncontrolledTooltip
                              delay={100}
                              placement="top"
                              target="progress-bar"
                              trigger="hover focus"
                            >
                              Let op! Je wordt sneller gevonden als je een volledig profiel hebt.
                            </UncontrolledTooltip>

                          </TabPane>
                          <TabPane tabId="iconTabs2">
                            <p className="description">
                              Wow, it's empty in here. Seems like you haven't yet made any connections!
                          </p>
                          </TabPane>
                          <TabPane tabId="iconTabs3">
                            <p className="description">
                              Wow, it's empty in here. Seems you don't have any messages!
                          </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
