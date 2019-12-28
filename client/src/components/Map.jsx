import React, { Component } from "react";
import shouldPureComponentUpdate from "react-pure-render/function";
import controllable from "react-controllables";
import GoogleMap from "google-map-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Marker from "./Marker";

const K_SIZE = 80;

@controllable(["center", "zoom", "hoverKey", "clickKey"])
class Map extends Component {
  static propTypes = {
    center: PropTypes.object, // @controllable
    zoom: PropTypes.number, // @controllable
    hoverKey: PropTypes.string, // @controllable
    clickKey: PropTypes.string, // @controllable
    onCenterChange: PropTypes.func, // @controllable generated fn
    onZoomChange: PropTypes.func, // @controllable generated fn
    onHoverKeyChange: PropTypes.func, // @controllable generated fn
    locations: PropTypes.array
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);

    this.state = {
      zoom: 15,
      markerClickId: null
    };
  }

  _onChange = (center, zoom /* , bounds, marginBounds */) => {
    this.props.onCenterChange(center);
    this.props.onZoomChange(zoom);
    this.props.onHoverKeyChange(null);
    if (typeof this.props.clickKey === 'undefined') {
      this.props.onClickKeyChange(null);
    }
  };

  _onChildClick = (key, childProps) => {
    this.props.onHoverKeyChange(null);
    this.props.onClickKeyChange(this.props.hoverKey);
    this.setState({ markerClickId: this.props.hoverKey });
  };

  _onChildMouseEnter = (key /*, childProps */) => {
    this.props.onHoverKeyChange(key);
  };

  _onChildMouseLeave = (/* key, childProps */) => {
    this.props.onHoverKeyChange(null);
  };

  render() {
    var userArray = []
    if (this.props.userData.data) {
      userArray = this.props.userData.data
    }
    const mapLocations = userArray.map(user => {
      const { _id } = user;
      return (
        <Marker
          key={_id}
          {...user.coords}
          text={_id}
          hover={this.props.hoverKey === _id}
          show={this.state.markerClickId === _id}
          name={user.name}
          address={user.address}
          profilepicture={user.profileicon}
        />
      );
    });

    var mapWidth = (this.props.width / 3) * 2 - 26;
    var mapHeight = this.props.height - 182;

    return (
      <div style={{ height: mapHeight, width: mapWidth }}>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0" }}
          defaultCenter={{
            lat: 52.3666969,
            lng: 4.8945398
          }}
          center={this.props.coords}
          defaultZoom={this.state.zoom}
          zoom={this.state.zoom}
          hoverDistance={K_SIZE / 2}
          onChange={this._onChange}
          onChildClick={this._onChildClick}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
        >
          {mapLocations}
        </GoogleMap>
      </div>
    );
  }
}

Map.propTypes = {
  location: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  coords: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  location: state.browse.location,
  service: state.browse.service,
  coords: state.browse.coords
});

export default connect(mapStateToProps)(Map);
