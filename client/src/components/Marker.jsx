import React, { Component } from "react";
import PropTypes from "prop-types";
import shouldPureComponentUpdate from "react-pure-render";

const K_WIDTH = 80;
const K_HEIGHT = 80;

const markerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: "5px solid white",
  borderRadius: K_HEIGHT,
  backgroundColor: "transparent",
  backgroundImage:
    "url('https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_70/lady.jpg')",
  backgroundRepeat: "no-repeat",
  textAlign: "center",
  color: "black",
  fontSize: 16,
  fontWeight: "bold",
  padding: 4,
  cursor: "pointer"
};

const hoverStyle = {
  ...markerStyle,
  border: "5px solid #6F81ED"
};

const infoStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: 220,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: "5px solid #6F81ED",
  borderRadius: K_HEIGHT,
  backgroundColor: "white",
  backgroundImage:
    "url('https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_70/lady.jpg')",
  backgroundRepeat: "no-repeat",
  textAlign: "left",
  color: "black",
  fontSize: 16,
  fontWeight: "bold",
  padding: 4,
  paddingLeft: 80,
  cursor: "pointer"
};

class Marker extends Component {
  static propTypes = {
    // use hover from controllable
    hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const style = this.props.hover ? hoverStyle : markerStyle;
    return (
      <React.Fragment>
        <div className="hint hint--html hint--info hint--top" style={style}>
          <div></div>
          <div style={{ width: 80 }} className="hint__content"></div>
        </div>
        {this.props.show && (
          <div>
            <div style={{ width: "40px" }}></div>
            <div style={infoStyle}>
              <div className="text-primary font-weight-normal mt-0 mb-1">
                Leon Hassing
              </div>
              <div className="text-gray font-weight-light my-0">1.2 km</div>
              <div className="text-gray font-weight-light my-0">15 EUR/uur</div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Marker;
