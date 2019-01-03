import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

class Map extends Component {

  render() {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };
    const styleMap = { height: '100vh' };
    const styleMarker = { 
      width: '20px', 
      height: '20px',
      backgroundColor: '#96D8FE',
      borderRadius: '50%' 
    }
    if (this.props.selectedFlat) { 
      marker = <div
        style={styleMarker} 
          lat={this.props.selectedFlat.lat}
          lng={this.props.selectedFlat.lng} />; 
      center = { lat: this.props.selectedFlat.lat,
                 lng: this.props.selectedFlat.lng };
    }

    return (
      <div className="col-sm-5" style={styleMap}>
        <GoogleMapReact 
        center={center} 
        defaultZoom={15}> 
        {marker}
        </GoogleMapReact>
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat }; 
}

export default connect(mapStateToProps)(Map);

