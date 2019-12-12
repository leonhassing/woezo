import React from "react";

// reactstrap components
import { Row, Col, Badge, Button, Progress, TabPane } from "reactstrap";

class ShowProfile extends React.Component {
  calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  isEmpty(str) {
    return !str || 0 === str.length;
  }

  render() {
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
      this.props.profileData.services
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

    var profileProgress = 0;
    if (!this.isEmpty(this.props.profileData.name)) {
      profileProgress += 1;
    }
    if (!this.isEmpty(this.props.profileData.email)) {
      profileProgress += 1;
    }
    if (!this.isEmpty(this.props.profileData.birthdate)) {
      profileProgress += 1;
    }
    if (!this.isEmpty(this.props.profileData.city)) {
      profileProgress += 1;
    }
    if (!this.isEmpty(this.props.profileData.phonenumber)) {
      profileProgress += 1;
    }
    if (!this.isEmpty(this.props.profileData.address)) {
      profileProgress += 1;
    }
    if (!this.isEmpty(this.props.profileData.description)) {
      profileProgress += 1;
    }

    return (
      <>
        <TabPane tabId="iconTabs1">
          <Row className="justify-content-center">
            <Col lg="4">
              <div className="card-profile-stats d-flex justify-content-left">
                {badges}
              </div>
            </Col>
            <Col className="justify-content-center" lg="3">
              <div className="card-profile-image">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    height="200px"
                    width="200px"
                    alt="..."
                    className="rounded-circle"
                    src={this.props.profileData.profilepicture} //require("assets/img/theme/team-4-800x800.jpg")
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
              {this.props.profileData.name}{" "}
              <span className="font-weight-light">
                ,{" "}
                {this.calculateAge(new Date(this.props.profileData.birthdate))}
              </span>
            </h3>
            <div className="h6 font-weight-300">
              <i className="ni location_pin mr-2" />
              {this.props.profileData.address}, {this.props.profileData.city}
            </div>
          </div>
          <div className="mt-5 py-5 border-top text-center">
            <Row className="justify-content-center">
              <Col lg="9">
                <p>{this.props.profileData.description}</p>
              </Col>
            </Row>
          </div>
          <Row className="justify-content-center">
            <Button onClick={this.props.editProfileHandler}>
              Wijzig profiel
            </Button>
          </Row>
          <div id="progress-bar" className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span>Profile completion</span>
              </div>
              <div className="progress-percentage">
                <span>{Math.round((100 * profileProgress) / 7)}%</span>
              </div>
            </div>
            <Progress max="7" value={profileProgress} />
          </div>
        </TabPane>
      </>
    );
  }
}

export default ShowProfile;
