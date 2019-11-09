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
import React from "react";
import 'assets/css/browse-page.css'

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] === variable){return pair[1];}
  }
  return(false);
}

function getWidth() {
  return window.innerWidth;
}

function getHeight() {
  return window.innerHeight;
}

class BrowseMap extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    width:  800,
    height: 600
  }
}
/**
* Calculate & Update state of new dimensions
*/
updateDimensions() {
    let updateWidth  = getWidth();
    let updateHeight = getHeight();
    console.log('Width:  ' +  getWidth() );
    console.log('Height: ' + getHeight() );
    this.setState({ width: updateWidth, height: updateHeight });
}

/**
 * Add event listener
 */
componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
}

/**
 * Remove event listener
 */
componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
}
    render() {

      var location = getQueryVariable("location");
      var zoom = "15"
      var mapURL = "https://maps.google.com/maps?q=" + location +"&t=&z=" + zoom + "&ie=UTF8&iwloc=&output=embed";
      var mapWidth = (this.state.width / 3 ) * 2 - 26;
      var mapHeight = this.state.height - 182;

      let view;
          view = (
              <div className="browseMap gmap_canvas">
                  <iframe title="browseMap" width={mapWidth} height={mapHeight} id="gmap_canvas" src={mapURL} frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0" >
                  </iframe>
              </div>
          )

      return (
          view
      );
  }
}

export default BrowseMap;