import React from 'react';

class HospitalAddressComponent extends React.Component {
   render() {

     if(!this.props.address || !this.props.contacts) {
       return <div> </div>
     }

     var hospitalWebsite = this.props.contacts.website;
     if(hospitalWebsite.indexOf("http") == -1) {
       hospitalWebsite = "http://" + hospitalWebsite;
     }

     return (
       <div className="panel panel-primary ">
						<div className="panel-heading">
							<h3 className="panel-title">Address</h3>
						</div>
						<div className="panel-body">
              <address style={{fontSize: "120%"}}>
                <i className="fa fa-map-marker"></i> {this.props.address.firstLine}<br/>
                  {this.props.address.city },{this.props.address.state } - {this.props.address.pincode} <br/>
                <i class="fa fa-phone"></i>: {this.props.contacts.telephoneNumber}<br/>
                <i class="fa fa-fax"></i>: {this.props.contacts.fax}<br/>
                <i class="fa fa-laptop"></i>Website - <a href={hospitalWebsite} target="_blank">{this.props.contacts.website}</a><br/>
                <i className="fa fa-envelope"></i> <a
                  href={this.props.contacts.emailId}>{this.props.contacts.emailId}</a>
              </address>
						</div>
				</div>
     );
   }
}

export default HospitalAddressComponent;
