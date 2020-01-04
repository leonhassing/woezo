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
import { withRouter } from "react-router"
import store from 'store'
import { setReservationUser } from "actions/reservationActions"
// reactstrap components
import {
  Row,
  Col,
  Button,
  Card,
  CardBody
} from "reactstrap";
import 'assets/css/scroll-enable.css'

class BrowseProfiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    this.handleSelectButton = this.handleSelectButton.bind(this);
  }
  handleSelectButton(e, user) {
    e.preventDefault();
    store.dispatch(setReservationUser(user));
    this.props.history.push('/reservation-page');
  }

  render() {
    var users = []
    var profileCount = 0
    if (this.props.userData.data) {
      users = this.props.userData.data
    }
    var selectionStyle = {
      backgroundColor: '#EFEFFB',
    }
    var normalStyle = {
      backgroundColor: 'transparent',
    }
    var profilesHeight = this.props.height - 182;
    const profiles = users.map(user => {
      profileCount++
      return (
        <Card key={"Profile-" + profileCount} style={this.props.selectedUser === user._id ? selectionStyle : normalStyle}>
          <CardBody>
            <Row>
              <Col>
                <img
                  alt="..."
                  className="rounded-circle img-center img-fluid"
                  src={user.profileicon}
                  style={{ width: "100px" }}
                />
              </Col>
              <Col xs="8" sm="8" md="8">
                <h6 className="text-primary">
                  {user.name}
                </h6>
                <p className="text-gray">
                  {user.address}
                </p>
                <Button
                  className="btn-1 ml-1"
                  color="primary"
                  outline
                  type="button"
                  onClick={e => {
                    this.handleSelectButton(e, user);
                  }}
                >
                  Kies
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="info"
                  outline
                  type="button"
                >
                  Bericht
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <br />
                <p>
                  {user.description}
                </p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      );
    })
    return (
      <>
        <div style={{ height: profilesHeight }}>
          {profiles}
        </div>
      </>
    )
  }
}

export default withRouter(BrowseProfiles);
