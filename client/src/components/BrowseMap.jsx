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
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import MapMarker from './MapMarker'

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loading: true,
      coords: {
        lat: 52.3666969,
        lng: 4.8945398
      },
      zoom: 14
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
        this.setState({ loading: false});
      })
  };

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
        <div style={{ height: mapHeight, width: mapWidth }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0'}}
            defaultCenter={this.state.coords}
            defaultZoom={this.state.zoom}
          >
            <MapMarker
              lat={52.013167}
              lng={4.354548}
              text="Custom Marker Dikke Lul Drie Bier"
            />
          </GoogleMapReact>
        </div>
      );
    }
    
    return (
      view
    );
  };
};

export default MapContainer