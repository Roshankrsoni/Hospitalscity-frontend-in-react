import React from 'react';

class HospitalMapComponent extends React.Component {
   render() {
     return (
        <div className="panel panel-primary ">
    			<div className="panel-heading">
    				<h3 className="panel-title">Google Map Location</h3>
    			</div>
    			<div className="panel-body">
    				<div id="googleMap" ></div>
    			</div>
    		</div>
     );
   }
}
