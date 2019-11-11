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
/*eslint-disable*/
import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
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
      loading: true,
      width:  800,
      height: 600,
      coords: {
        lat: 52.3666969,
        lng: 4.8945398
      }
    };

  };

  /**
   * Add geocode api call before component mount
   */
  componentWillMount() {
    var geocodeApiQuery = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.location}&key=AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0`
    axios
      .get(geocodeApiQuery)
      .then(response => { 
        const coords = {
          lat: response.data.results[0].geometry.location.lat,
          lng: response.data.results[0].geometry.location.lng
        }
      this.setState({ coords: coords});
      this.setState({loading: false});
      })
  };

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  };

  /**
  * Remove event listener
  */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  };

  /**
  * Calculate & Update state of new dimensions
  */
  updateDimensions() {
    let updateWidth  = getWidth();
    let updateHeight = getHeight();
    this.setState({ width: updateWidth, height: updateHeight });
  };

  render() {

    var mapWidth = (this.state.width / 3 ) * 2 - 26;
    var mapHeight = this.state.height - 182;

    const mapStyles = {
      width: mapWidth,
      height: mapHeight
    };

    if(this.state.loading === true) {
      var view = (
        <div/>
      )
    }
    else {
      var view = (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={this.state.coords}
        >
          <Marker
            lat={52.3666969}
            lng={4.8945398}
            name="My Marker"
            color="blue"
          />
        </Map>
      )
    }
    
    return ( 
      view
    );
  };
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0'
})(MapContainer);