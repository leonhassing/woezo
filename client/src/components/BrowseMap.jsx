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

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

function getWidth() {
  return window.innerWidth;
}

function getHeight() {
  return window.innerHeight;
}

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      width:  800,
      height: 600,
      searchLocationLat: '',
      searchLocationLng: ''
      };
    }


  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    this.getCoordsFromLocation(this.props.location);
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
  * Remove event listener
  */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
  * Calculate & Update state of new dimensions
  */
  updateDimensions() {
    let updateWidth  = getWidth();
    let updateHeight = getHeight();
    this.setState({ width: updateWidth, height: updateHeight });
  }

  getCoordsFromLocation(location) {
    var geocodeApiQuery = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0`
    return axios
    .get(geocodeApiQuery)
    .then(response => {
      const coords = {
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng
      }
      return coords
    })
  }

  getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] === variable){return pair[1];}
    }
    return(false);
  }
  

  render() {

    var mapWidth = (this.state.width / 3 ) * 2 - 26;
    var mapHeight = this.state.height - 182;

    const mapStyles = {
      width: mapWidth,
      height: mapHeight
    };

    let view = <Map
              google={this.props.google}
              zoom={15}
              style={mapStyles}
              initialCenter={this.getCoordsFromLocation(this.props.location)}
            />

    return (
      view
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0'
})(MapContainer);