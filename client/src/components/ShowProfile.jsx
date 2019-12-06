import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// reactstrap components
import {
    Row,
    Col,
    Badge,
    Button,
    Progress,
    UncontrolledTooltip,
    TabPane
} from "reactstrap";

class ShowProfile extends React.Component {
    calculateAge(birthdateRaw) { // birthdate is a date
        var birthdate = new Date(birthdateRaw);
        var ageDifMs = Date.now() - birthdate.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    render() {
        return (
            <>
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
                                    onClick={this.props.handleLogout}
                                    size="sm"
                                >
                                    Logout
                                  </Button>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center mt-5">
                        <h3>
                            {this.props.name}{" "}
                            <span className="font-weight-light">, {this.calculateAge(this.props.birthdate)}</span>
                        </h3>
                        <div className="h6 font-weight-300">
                            <i className="ni location_pin mr-2" />
                            {this.props.city}
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
                        <Button
                            onClick={this.props.editProfileHandler}
                        >
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
            </>
        );
    }
}

ShowProfile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    birthdate: PropTypes.object.isRequired,
    city: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    services: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    name: state.profile.name,
    email: state.profile.email,
    address: state.profile.address,
    birthdate: state.profile.birthdate,
    city: state.profile.city,
    phonenumber: state.profile.phonenumber,
    description: state.profile.description,
    services: state.profile.services
});

export default connect(mapStateToProps)(ShowProfile);