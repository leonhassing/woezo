import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import controllable from 'react-controllables';
import GoogleMap from 'google-map-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Marker from './Marker'

const K_SIZE = 80;

@controllable(['center', 'zoom', 'hoverKey', 'clickKey'])
class Map extends Component {
  static propTypes = {
    center: PropTypes.array, // @controllable
    zoom: PropTypes.number, // @controllable
    hoverKey: PropTypes.string, // @controllable
    clickKey: PropTypes.string, // @controllable
    onCenterChange: PropTypes.func, // @controllable generated fn
    onZoomChange: PropTypes.func, // @controllable generated fn
    onHoverKeyChange: PropTypes.func, // @controllable generated fn

    locations: PropTypes.array
  };

  static defaultProps = {
    center: [59.838043, 30.337157],
    zoom: 9,
    locations: [
      {id: 'A', lat: 52.369867, lng: 4.888918},
      {id: 'B', lat: 52.357389, lng: 4.900575},
      {id: 'C', lat: 52.386046, lng: 4.917757},
    ]
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  
    this.state = {
      width: 800,
      height: 600,
      zoom: 14
    };
  };

  _onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {
    this.props.onCenterChange(center);
    this.props.onZoomChange(zoom);
  }

  _onChildClick = (key, childProps) => {
    this.props.onCenterChange([childProps.lat, childProps.lng]);
  }

  _onChildMouseEnter = (key /*, childProps */) => {
    this.props.onHoverKeyChange(key);
  }

  _onChildMouseLeave = (/* key, childProps */) => {
    this.props.onHoverKeyChange(null);
  }
    
  render() { 
    const mapLocations = this.props.locations
      .map(location => {
        const {id, ...locationCoords} = location;

        return (
          <Marker
            key={id}
            {...locationCoords}
            text={id}
            // use your hover state (from store, react-controllables etc...)
            hover={this.props.hoverKey === id} />
        );
      });

    var mapWidth = (this.props.width / 3 ) * 2 - 26;
    var mapHeight = this.props.height - 182;

    return (
      <div style={{ height: mapHeight, width: mapWidth }}>
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0'}}
          defaultCenter={this.props.coords}
          center={this.props.coords}
          defaultZoom={this.state.zoom}
          zoom={this.state.zoom}
          hoverDistance={K_SIZE / 2}
          onBoundsChange={this._onBoundsChange}
          onChildClick={this._onChildClick}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
        >
          {mapLocations}
        </GoogleMap>
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