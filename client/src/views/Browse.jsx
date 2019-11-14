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
  Row,
  Col
} from "reactstrap";
// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import BrowseProfiles from "components/BrowseProfiles.jsx";
import BrowseFilter from "components/BrowseFilter.jsx";
import BrowseMap from "components/BrowseMap.jsx";
import QueryString from "query-string";
import 'assets/css/scroll-enable.css'

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
      width:  800,
      height: 600,
      filter: ''
    };

  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  };

  updateDimensions() {
    let updateWidth  = getWidth();
    let updateHeight = getHeight();
    this.setState({ width: updateWidth, height: updateHeight });
  };

  render() {
    document.body.style.overflow = 'hidden';
    const values = QueryString.parse(this.props.location.search);
    var location = values.location
    var service = values.service
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
                  <BrowseFilter service={service}/>
                <Row className="enableScroll">
                  <Col className="pr-0 enableScroll" md="4">
                    <BrowseProfiles height={this.state.height} width={this.state.width} service={service}/>
                  </Col>
                  <Col className="pl-1" md="8">
                    <BrowseMap height={this.state.height} width={this.state.width} location={location}/>
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
