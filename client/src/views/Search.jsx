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
  Row,
  Col
} from "reactstrap";
// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import "../assets/css/custom-additions.css"
import store from 'store'
import { getGeocodeCoords, setCurrentService, setCurrentLocation } from 'actions/browseActions'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: {
        location: '',
        service: ''
      },

    }
    this.handleLocation = this.handleLocation.bind(this);
    this.handleService = this.handleService.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleLocation(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      searchQuery:
      {
        ...prevState.searchQuery, location: value
      }
    }))
  }

  handleService(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      searchQuery:
      {
        ...prevState.searchQuery, service: value
      }
    }))
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    let location = this.state.searchQuery.location;
    let service = this.state.searchQuery.service;

    store.dispatch(setCurrentLocation(location));
    store.dispatch(setCurrentService(service));
    await getGeocodeCoords(location);
    this.props.history.push('/browse-page');
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      searchQuery: {
        location: '',
        service: ''
      },
    })
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
          <section className="section">
            <Container>
              <Form role="form" onSubmit={this.handleFormSubmit}>
                <Row>
                  <Col md="2" />
                  <Col md="8">
                    <h4 className="mb-3">
                      <span>Waar woon je?</span>
                    </h4>
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
                    <h4 className="mb-3">
                      <span>Wat zoek je?</span>
                    </h4>
                  </Col>
                  <Col md="2" />
                </Row>
                <div className="radio-hide">
                  <Row>
                    <Col xs="6" md={{ size: 3, offset: 2 }}>
                      <small className="text-uppercase font-weight-bold">
                        Schoonmaak
                        </small>
                      <br />
                      <br />
                      <input id="cleaning" type="radio" name="service-type" value="cleaning" onChange={this.handleService} />
                      <label className="radio-img cleaning" htmlFor="cleaning"></label>
                    </Col>
                    <Col xs="6" md="3">
                      <small className="text-uppercase font-weight-bold">
                        Katoppas
                        </small>
                      <br />
                      <br />
                      <input id="cat" type="radio" name="service-type" value="cat" onChange={this.handleService} />
                      <label className="radio-img cat" htmlFor="cat"></label>
                    </Col>
                    <Col xs="6" md="3">
                      <small className="text-uppercase font-weight-bold">
                        Honduitlaat
                        </small>
                      <br />
                      <br />
                      <input id="dog" type="radio" name="service-type" value="dog" onChange={this.handleService} />
                      <label className="radio-img dog" htmlFor="dog"></label>
                    </Col>
                    <Col xs="6" md={{ size: 3, offset: 2 }}>
                      <small className="text-uppercase font-weight-bold">
                        Babysitter
                        </small>
                      <br />
                      <br />
                      <input id="baby" type="radio" name="service-type" value="baby" onChange={this.handleService} />
                      <label className="radio-img baby" htmlFor="baby"></label>
                    </Col>
                    <Col xs="6" md="3">
                      <small className="text-uppercase font-weight-bold">
                        Bijles
                        </small>
                      <br />
                      <br />
                      <input id="tutor" type="radio" name="service-type" value="tutor" onChange={this.handleService} />
                      <label className="radio-img tutor" htmlFor="tutor"></label>
                    </Col>
                    <Col xs="6" md="3">
                      <small className="text-uppercase font-weight-bold">
                        Klusjesman
                        </small>
                      <br />
                      <br />
                      <input id="handy" type="radio" name="service-type" value="handy" onChange={this.handleService} />
                      <label className="radio-img handy" htmlFor="handy"></label>
                    </Col>
                    <Col xs="6" md={{ size: 3, offset: 2 }}>
                      <small className="text-uppercase font-weight-bold">
                        IT Hulp
                        </small>
                      <br />
                      <br />
                      <input id="it" type="radio" name="service-type" value="it" onChange={this.handleService} />
                      <label className="radio-img it" htmlFor="it"></label>
                    </Col>
                    <Col xs="6" md="3">
                      <small className="text-uppercase font-weight-bold">
                        Tuinier
                        </small>
                      <br />
                      <br />
                      <input id="garden" type="radio" name="service-type" value="garden" onChange={this.handleService} />
                      <label className="radio-img garden" htmlFor="garden"></label>
                    </Col>
                    <Col xs="6" md="3">
                      <small className="text-uppercase font-weight-bold">
                        Muziekles
                        </small>
                      <br />
                      <br />
                      <input id="music" type="radio" name="service-type" value="music" onChange={this.handleService} />
                      <label className="radio-img music" htmlFor="music"></label>
                    </Col>
                  </Row>
                </div>
                <br />
                <Row>
                  <Col md="2" />
                  <Col sm="6" md="2" lg="2">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                      color="default"
                      type="submit"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                      </span>
                      <span className="btn-inner--text">
                        Vind nu!
                      </span>
                    </Button>
                  </Col>
                  <Col md="2" />
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

export default Search;