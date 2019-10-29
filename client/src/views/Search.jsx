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


class Profile extends React.Component {
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
            <Container>
              <Form>
                <Row>
                  <Col md="6">
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
                    <FormGroup tag="fieldset">
                      <legend>Radio Buttons</legend>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" />{' '}
                          Option one is this and that—be sure to include why it's great
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" />{' '}
                          Option two can be something else and selecting it will deselect option one
                        </Label>
                      </FormGroup>
                      <FormGroup check disabled>
                        <Label check>
                          <Input type="radio" name="radio1" disabled />{' '}
                          Option three is disabled
                        </Label>
                      </FormGroup>
                    </FormGroup>
                    <div className="custom-control custom-radio mb-3">
                      <input
                        className="custom-control-input"
                        id="customRadio5"
                        name="custom-radio-2"
                        type="radio"
                      />
                      <label className="custom-control-label" htmlFor="customRadio5">
                        Unchecked
                      </label>
                    </div>
                    <div className="custom-control custom-radio mb-3">
                      <input
                        className="custom-control-input"
                        defaultChecked
                        id="customRadio6"
                        name="custom-radio-2"
                        type="radio"
                      />
                      <label className="custom-control-label" htmlFor="customRadio6">
                        Checked
                      </label>
                    </div>   
                  </Col>
                </Row>
              </Form>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
