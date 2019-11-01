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
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Col
} from "reactstrap";
// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import "../assets/css/custom-additions.css"
import catLogo from '../assets/img/icons/cat.png'
import tutorLogo from '../assets/img/icons/books.png'


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: {},
    }
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <MainNavbar />
        <main className="search-page" ref="main">
          <section className="section section-shaped">
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
            <div className="py-5 bg-secondary">
              <Container>
                <Form>
                  <Row>
                    <Col md="2"/>
                    <Col md="8">
                      <h4 className="mb-3">
                        <span>Waar woon je?</span>
                      </h4>
                      <FormGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-map-marker" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Adres" type="text" />
                        </InputGroup>
                      </FormGroup>
                      <h4 className="mb-3">
                        <span>Wat zoek je?</span>
                      </h4>   
                    </Col>
                    <Col md="2"/>
                  </Row>
                  <Row>
                    <Col md="2"/>
                    <Col sm="6" md="2" lg="2">
                      <div class="radio btn">
                          <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-4" checked/>
                          <p className="mb-2">
                            <span>Bijles</span>
                          </p>
                          <img src={catLogo} className="custom-logo"/>
                      </div>
                    </Col>
                    <Col sm="6" md="2" lg="2">
                      <div class="radio btn">
                          <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-4" checked/>
                          <p className="mb-2">
                            <span>Bijles</span>
                          </p>
                          <img src={tutorLogo} className="custom-logo"/>
                      </div>
                    </Col>
                    <Col sm="6" md="2" lg="2">
                      <div class="radio btn">
                          <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-4" checked/>
                          <p className="mb-2">
                            <span>Bijles</span>
                          </p>
                          <img src={catLogo} className="custom-logo"/>
                      </div>
                    </Col>
                    <Col sm="6" md="2" lg="2">
                      <div class="radio btn">
                          <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-4" checked/>
                          <p className="mb-2">
                            <span>Bijles</span>
                          </p>
                          <img src={tutorLogo} className="custom-logo"/>
                      </div>
                    </Col>
                    <Col md="2"/>
                  </Row>
                  <Row>
                    <Col md="2"/>
                    <Col sm="6" md="2" lg="2">
                      <div class="radio btn">
                          <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-4" checked/>
                          <p className="mb-2">
                            <span>Bijles</span>
                          </p>
                          <img src={catLogo} className="custom-logo"/>
                      </div>
                    </Col>
                    <Col sm="6" md="2" lg="2">
                      <div class="radio btn">
                          <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-4" checked/>
                          <p className="mb-2">
                            <span>Bijles</span>
                          </p>
                          <img src={tutorLogo} className="custom-logo"/>
                      </div>
                    </Col>
                    <Col sm="6" md="2" lg="2">
                      <div class="radio btn">
                          <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-4" checked/>
                          <p className="mb-2">
                            <span>Bijles</span>
                          </p>
                          <img src={catLogo} className="custom-logo"/>
                      </div>
                    </Col>
                    <Col sm="6" md="2" lg="2">
                      <div class="radio btn">
                          <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-4" checked/>
                          <p className="mb-2">
                            <span>Bijles</span>
                          </p>
                          <img src={tutorLogo} className="custom-logo"/>
                      </div>
                    </Col>
                    <Col md="2"/>
                  </Row>
                  <Row>
                    <Col md="2"/>
                    <Col sm="6" md="2" lg="2">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                      color="default"
                      href="/browse-page"
                    >
                      <span className="btn-inner--icon mr-1">
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                      </span>
                      <span className="btn-inner--text">
                        Vind nu!
                      </span>
                    </Button>
                    </Col>
                    <Col md="2"/>
                  </Row>
                </Form>
              </Container>
            </div>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Search;
