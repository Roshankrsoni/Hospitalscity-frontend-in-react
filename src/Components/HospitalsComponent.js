import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'

class HospitalsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { hospitals : []};
  }

  render() {

    const hospitalComponents = [];
    for(var i=0; i < this.state.hospitals ; i++) {
      hospitalComponents.push(<Hospitals />);
    }

    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <h1 className="page-header">Hospitals <small>{{searchQuery}}</small></h1>
          </div>
        </Row>
        {hospitalComponents}
      <Grid>
    )
  }

}

const AddressDetail = (props) => {
  return (
    <address style="font-size: 120%">
     <i className="fa fa-map-marker"></i> {{props.firstLine}}<br>
       {{props.city }},{{props.state }} - {{props.pincode}} <br>
       <i class="fa fa-phone"></i>: {{props.telNo}}<br>
     <i class="fa fa-fax"></i>: {{props.faxN}}<br>
     <i class="fa fa-laptop"></i> <a href="{{hospital.contactDetails.hosptialWebSite}}"  >Website</a><br>
   </address>
  );
}

const HospitalDetail = (props) => {

  const medicineTypes = [];
  for(var i=0; i < props.medTypes.length; i++ ) {
    medicineTypes.push(<h5><span>{props.medTypes[i]}</span></h5>)
  }

  return (
     <Row>
    		<Col sm={7}>
    			<img imageErrorDirective  className="img-responsive" src="http://panaceaplus.in/getImage.php?in={{props.hospitalName}}"  alt="750*500" />
    		<Col>
    		<Col sm={5}>
    			<h3> {{props.displayName}} </h3>
          {medicineTypes}
          <AddressDetail firstLine="some random address" city="abc" state="ddafda" pincode="fda" telNo="" faxNo=""/>
    			<a type="button" class="btn btn-primary" ng-click="GoToHospital(hospital.uid)">View Hospital <span class="glyphicon glyphicon-chevron-right"></span></a>
    		</Col>
     </Row>
  );
}

export default HospitalsComponent;
