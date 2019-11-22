import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Marker from './Marker'

export class Map extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      width: 800,
      height: 600,
      zoom: 14
    };
  };

  render() {

    var mapWidth = (this.props.width / 3 ) * 2 - 26;
    var mapHeight = this.props.height - 182;

    return (
      <div style={{ height: mapHeight, width: mapWidth }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0'}}
          defaultCenter={this.props.coords}
          center={this.props.coords}
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={52.0115769}
            lng={4.3570677}
          />
        </GoogleMapReact>
      </div>
    );
  }
};

Map.propTypes = {
  location: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  coords: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    location: state.browse.location,
    service: state.browse.service,
    coords: state.browse.coords
})

export default connect(mapStateToProps)(Map);