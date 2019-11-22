import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
  
const K_WIDTH = 80;
const K_HEIGHT = 80;

const markerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid white',
  borderRadius: K_HEIGHT,
  backgroundColor: 'transparent',
  backgroundImage: "url('https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_70/lady.jpg')",
  textAlign: 'center',
  color: 'black',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

export default class Marker extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={markerStyle}>
          {this.props.text}
       </div>
    );
  }
}