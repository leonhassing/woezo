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
  Card,
  CardBody,
  Container,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import store from "../store";
import { logoutUser } from "../actions/authActions";

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
            <Container className="mt--300">
              <Row className="justify-content-center">
                <Col lg="12">
                  {/* Tabs with icons */}
                  <div className="nav-wrapper">
                    <Nav
                      className="nav-fill flex-column flex-md-row"
                      id="tabs-icons-text"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.iconTabs === 1}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.iconTabs === 1
                          })}
                          onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                          href="#pablo"
                          role="tab"
                        >
                          <i className="ni ni-cloud-upload-96 mr-2" />
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.iconTabs === 2}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.iconTabs === 2
                          })}
                          onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                          href="#pablo"
                          role="tab"
                        >
                          <i className="ni ni-bell-55 mr-2" />
                          Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.iconTabs === 3}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.iconTabs === 3
                          })}
                          onClick={e => this.toggleNavs(e, "iconTabs", 3)}
                          href="#pablo"
                          role="tab"
                        >
                          <i className="ni ni-calendar-grid-58 mr-2" />
                          Messages
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                  <Card className="shadow">
                    <CardBody>
                      <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                        <TabPane tabId="iconTabs1">
                          <p className="description">
                            Raw denim you probably haven't heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth.
                          </p>
                          <p className="description">
                            Raw denim you probably haven't heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse.
                          </p>
                        </TabPane>
                        <TabPane tabId="iconTabs2">
                          <p className="description">
                            Cosby sweater eu banh mi, qui irure terry richardson
                            ex squid. Aliquip placeat salvia cillum iphone.
                            Seitan aliquip quis cardigan american apparel,
                            butcher voluptate nisi qui.
                          </p>
                        </TabPane>
                        <TabPane tabId="iconTabs3">
                          <p className="description">
                            Raw denim you probably haven't heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth.
                          </p>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
