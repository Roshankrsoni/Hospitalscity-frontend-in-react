import React from 'react';

className HospitalAddressComponent extends React.Component {
   render() {
     return (
       <div className="panel panel-primary ">
						<div className="panel-heading">
							<h3 className="panel-title">Address</h3>
						</div>
						<div className="panel-body">
							<address style="font-size: 100%">
								<i className="fa fa-map-marker"></i> {{hospital.address.firstLine | lowercase }}<br>
							  	{{hospital.address.city | lowercase }},{{hospital.address.state | lowercase }} - {{hospital.address.pincode}} <br>
							    <i className="fa fa-phone"></i>: {{hospital.contactDetails.telephoneNumber}}<br>
								<i className="fa fa-fax"></i>: {{hospital.contactDetails.hospitalFax}}<br>
								<i className="fa fa-laptop"></i> <a href="{{hospital.contactDetails.hosptialWebSite}}"	>Website</a><br>
								<i className="fa fa-envelope"></i>: <a
									href="{{hospital.contactDetails.hospitalEmailId}}">{{hospital.contactDetails.hospitalEmailId}}</a>
							</address>
						</div>
				</div>
     );
   }
}

export default HospitalAddressComponent;
