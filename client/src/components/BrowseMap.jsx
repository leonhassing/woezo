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

import React, {Component} from 'react'
import store from '../store'

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      width: 800,
      height: 600
    };
    this.createGoogleMap = this.createGoogleMap.bind(this);
    this.createMarker = this.createMarker.bind(this);
  };

  componentDidMount() {

    const googleMapScript  = document.createElement("script");
    const key = 'AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0';
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
    })
  }

  createGoogleMap = () => {
    var reduxState = store.getState();
    var coords = reduxState.browse.coords;
    new window.google.maps.Map(document.getElementById('google-map'), {
      zoom: 14,
      center: coords,
      disableDefaultUI: true
    })
  }
  

createMarker = () => {

  var image = {
    url: 'https://img.icons8.com/material-outlined/72/marker.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(72, 72),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(36, 72)
  };

  new window.google.maps.Marker({
    position: { lat: 43.642567, lng: -79.387054 },
    map: this.googleMap,
    icon: image
  })
}

  render() {

    var mapWidth = (this.props.width / 3 ) * 2 - 26;
    var mapHeight = this.props.height - 182;

      var view = (
        <div
          id="google-map"
          ref="google-map"
          style={{ height: mapHeight, width: mapWidth }}
        />
      );
    
    return (
      view
    );
  };
};

export default MapContainer

key: ''