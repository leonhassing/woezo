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

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col,
    Badge
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import store from 'store'
import "assets/css/invis-card.css";

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    calculateAge(birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }


    render() {
        var reduxState = store.getState();
        var profileData = reduxState.reservation
        const badges = [];
        var first = true;
        var count = 0;
        const friendlyNames = {
            cleaning: "Schoonmaker",
            dog: "Honduitlaat",
            cat: "Katoppas",
            baby: "Oppas",
            tutor: "Bijles",
            handy: "Klusjesman",
            it: "IT-hulp",
            garden: "Tuinier",
            music: "Muziekles"
        };
        for (const [service, bool] of Object.entries(
            profileData.services
        )) {
            if (bool && count < 3) {
                count += 1;
                if (first) {
                    badges.push(
                        <h5 key={service}>
                            <Badge color="primary">{friendlyNames[service]}</Badge>
                        </h5>
                    );
                } else {
                    badges.push(
                        <h5 key={service}>
                            <Badge className="ml-2" color="primary">
                                {friendlyNames[service]}
                            </Badge>
                        </h5>
                    );
                }
                first = false;
            }
        }

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
                                        <Card className="shadow">
                                            <CardBody>
                                                <Row className="justify-content-center">
                                                    <Col lg="4">
                                                        <div className="card-profile-stats d-flex justify-content-left">
                                                            {badges}
                                                        </div>
                                                    </Col>
                                                    <Col className="justify-content-center" lg="3">
                                                        <div className="card-profile-image">
                                                            <p href="#pablo" onClick={e => e.preventDefault()}>
                                                                <img
                                                                    height="200px"
                                                                    width="200px"
                                                                    alt="..."
                                                                    className="rounded-circle"
                                                                    src={profileData.profilepicture.length > 1 ? profileData.profilepicture : require('../assets/img/theme/default-profile-icon.png')}
                                                                />
                                                            </p>
                                                        </div>
                                                    </Col>
                                                    <Col lg="4">
                                                        <div className="card-profile-stats justify-content-right">
                                                            <h5>
                                                                <Badge color="primary" className="float-right">
                                                                    Reageert snel
                                                                </Badge>
                                                            </h5>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="text-center mt-5">
                                                    <h3>
                                                        {profileData.name === "" ? "John Doe" : profileData.name}
                                                        <span className="font-weight-light">
                                                            {profileData.birthdate === null ? "" : ",  " + this.calculateAge(new Date(profileData.birthdate))}
                                                        </span>
                                                    </h3>
                                                    <div className="h6 font-weight-300">
                                                        <i className="ni location_pin mr-2" />
                                                        {profileData.address}
                                                        {profileData.address === "" | profileData.city === "" ? "" : ", "}
                                                        {profileData.city}
                                                    </div>
                                                </div>
                                                <div className="mt-5 py-5 border-top text-center">
                                                    <Row className="justify-content-center">
                                                        <Col lg="9">
                                                            <p>{profileData.description === "" ? "Nog geen beschrijving toegevoegd, laat iets van je weten!" : profileData.description}</p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Row className="justify-content-center">
                                                    <Button onClick={e => e.preventDefault()}>
                                                        Reserveer nu
                                                    </Button>
                                                </Row>
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

export default Reservation;
