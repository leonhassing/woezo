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
import { logoutUser } from "../actions/authActions";
import { setProfileInfo, getUserInfoFromId } from "../actions/profileActions";
import { getGeocodeCoords } from "../actions/browseActions";
import ShowProfile from "components/ShowProfile";
import EditProfile from "components/EditProfile";
import store from "../store";
import "assets/css/invis-card.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      birthdate: null,
      city: "",
      description: "",
      email: "",
      name: "",
      phonenumber: "",
      profilepicture: {},
      services: {
        cleaning: false,
        cat: false,
        dog: false,
        baby: false,
        tutor: false,
        handy: false,
        it: false,
        garden: false,
        music: false
      },
      edit: false,
      iconTabs: 1
    };
    this.toggleNavs = this.toggleNavs.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
    this.editProfileHandler = this.editProfileHandler.bind(this);
  }

  componentWillMount() {
    this.getUserInfo();
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  editProfileHandler() {
    this.setState({
      edit: true
    });
  }

  async getUserInfo() {
    var reduxState = store.getState();
    var userId = reduxState.auth.user.id;
    var profileInfo = await getUserInfoFromId({ userId: userId });
    this.setState({
      address: profileInfo.address,
      birthdate: profileInfo.birthdate,
      city: profileInfo.city,
      description: profileInfo.description,
      email: profileInfo.email,
      name: profileInfo.name,
      phonenumber: profileInfo.phonenumber,
      services: profileInfo.services,
      profilepicture: profileInfo.profilepicture
    });
  }

  async handleProfileSubmit(e, editState) {
    e.preventDefault();
    var reduxState = store.getState();
    var userId = reduxState.auth.user.id;
    var croppedpicture = await editState.croppieobject.result('base64', 'viewport');
    var requestBody = {
      userId: userId,
      city: editState.city,
      address: editState.address
    }
    var coords = await getGeocodeCoords(requestBody);

    var requestBodyInfo = {
      userId: userId,
      address: editState.address,
      birthdate: editState.birthdate,
      city: editState.city,
      coords: coords,
      name: editState.name,
      email: editState.email,
      phonenumber: editState.phonenumber,
      description: editState.description,
      services: editState.services,
      profilepicture: croppedpicture
    };
    setProfileInfo(requestBodyInfo);
    this.setState({
      address: editState.address,
      birthdate: editState.birthdate,
      city: editState.city,
      description: editState.description,
      email: editState.email,
      profilepicture: croppedpicture,
      name: editState.name,
      phonenumber: editState.phonenumber,
      services: editState.services,
      edit: false
    });
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
                        <TabContent
                          activeTab={"iconTabs" + this.state.iconTabs}
                        >
                          {this.state.edit ? (
                            <EditProfile
                              handleProfileSubmit={this.handleProfileSubmit}
                              profileData={this.state}
                            />
                          ) : (
                              <ShowProfile
                                handleLogout={this.handleLogout}
                                editProfileHandler={this.editProfileHandler}
                                profileData={this.state}
                              />
                            )}
                          <TabPane tabId="iconTabs2">
                            <p className="description">
                              Wow, it's empty in here. Seems like you haven't
                              yet made any connections!
                            </p>
                          </TabPane>
                          <TabPane tabId="iconTabs3">
                            <p className="description">
                              Wow, it's empty in here. Seems you don't have any
                              messages!
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
