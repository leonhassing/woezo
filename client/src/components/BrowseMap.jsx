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
import axios from 'axios';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loading: true,
      width: 800,
      height: 600,
      coords: {
        lat: 52.3666969,
        lng: 4.8945398
      },
      zoom: 14
    };
    this.googleMapRef = React.createRef()
    this.createGoogleMap = this.createGoogleMap.bind(this);
    this.createMarker = this.createMarker.bind(this);
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
        this.setState({ loading: false});
      })
  };

  componentDidMount() {
    const googleMapScript  = document.createElement("script");
    const key = 'AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0';
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
    })
  }

  createGoogleMap = () =>
  new window.google.maps.Map(this.googleMapRef.current, {
    zoom: this.state.zoom,
    center: this.state.coords,
    disableDefaultUI: true,
  })

createMarker = () =>
  new window.google.maps.Marker({
    position: { lat: 43.642567, lng: -79.387054 },
    map: this.googleMap,
  })

  render() {

    var mapWidth = (this.props.width / 3 ) * 2 - 26;
    var mapHeight = this.props.height - 182;

    if(this.state.loading === true) {
      var view = (
        <div/>
      )
    }
    else {
      var view = (
        <div
          id="google-map"
          ref={this.googleMapRef}
          style={{ height: mapHeight, width: mapWidth }}
        />
      );
    }
    
    return (
      view
    );
  };
};

export default MapContainer

key: ''