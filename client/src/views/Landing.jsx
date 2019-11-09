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
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";

// index page sections
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
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
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Zoek je hulp?{" "}
                        <span>Met Woezo kom je verder</span>
                      </h1>
                      <p className="lead text-white">
                        Door Woezo vinden mensen elkaar. De makkelijkste app voor afnemers en aanbieders van kleine en grotere diensten in en rondom het huis.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-1 btn-icon mb-3 mb-sm-0"
                          color="primary"
                          href="/search-page"
                        >
                          <span className="btn-inner--icon mr-1 text-white">
                            <i className="fa fa-search" />
                          </span>
                          <span className="btn-inner--text text-white">
                            Vind hulp
                          </span>
                        </Button>
                        <Button
                          className="btn-1 btn-icon mb-3 mb-sm-0 ml-1"
                          color="info"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1 text-white">
                          <i className="fa fa-hand-paper-o" aria-hidden="true"></i>
                          </span>
                          <span className="btn-inner--text text-white">
                            Bied hulp
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            1. Vul je gewenste datum, tijdstip en postcode in
                          </h6>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              makkelijk
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              snel
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              intuitief
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Begin nu
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            2. Kies de hulp die het best bij je past
                          </h6>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              persoonlijk
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              reviews
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              eigen keus
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Lees verder
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            3. Betaal en geniet!
                          </h6>
                          <br/>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              veilig
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Lees verder
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Onze nieuwste krachten</h2>
                  <p className="lead text-muted">
                    Allemaal toegewijd om te helpen met jouw katten,
                    honden, schoonmaak, IT, noem maar op!
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Katoppas</small>
                      </h5>
                      <div className="mt-3">
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Hondenuitlaat
                        </small>
                      </h5>
                      <div className="mt-3">
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star-o"></span>
                        <span className="fa fa-2x fa-star-o"></span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Wu Jingyi</span>
                        <small className="h6 text-muted">IT Hulp</small>
                      </h5>
                      <div className="mt-3">
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star-o"></span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Nicole Gibson</span>
                        <small className="h6 text-muted">Babysitter</small>
                      </h5>
                      <div className="mt-3">
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star" style={{color:"orange"}}></span>
                        <span className="fa fa-2x fa-star-o"></span>
                        <span className="fa fa-2x fa-star-o"></span>
                      </div>
                    </div>
                  </div>
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

export default Landing;
