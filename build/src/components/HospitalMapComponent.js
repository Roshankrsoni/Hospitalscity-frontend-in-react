import React from 'react';
import GoogleMapReact from 'google-map-react';

class HospitalMapComponent extends React.Component {

   constructor(props) {
     super(props);
     this.renderMarkers = this.renderMarkers.bind(this);
   }

   renderMarkers(map, maps) {
     var location = this.props.location;
     var center = {lat: parseFloat(location.latitude), lng: parseFloat(location.longitude)}
     let marker = new maps.Marker({
       position: center,
       map,
       title: this.props.name
     });
   }


   render() {

     var location = this.props.location;
     if(!(location && location.latitude && location.longitude && this.props.name)){
       return <div> </div>;
     }

     var center = {lat: parseFloat(location.latitude), lng: parseFloat(location.longitude)}

     return (
        <div className="panel panel-primary ">
    			<div className="panel-heading">
    				<h3 className="panel-title">Google Map Location</h3>
    			</div>
    			<div className="panel-body">
            <GoogleMapReact
              defaultCenter={center}
              defaultZoom={this.props.zoom}
              style={{height: '300px'}}
              onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
            >
            </GoogleMapReact>
    			</div>
    		</div>
     );
   }
}

HospitalMapComponent.defaultProps = {
  center: {lat: 59.95, lng: 30.33},
  zoom: 14
};

export default HospitalMapComponent;
