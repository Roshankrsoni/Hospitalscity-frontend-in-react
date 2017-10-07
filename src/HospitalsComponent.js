import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import * as constants from './Constants.js';

const AddressDetail = (props) => {

  var hospitalWebsite = props.contacts.website;
  if(hospitalWebsite.indexOf("http") == -1) {
    hospitalWebsite = "http://" + hospitalWebsite;
  }

  return (
    <address style={{fontSize: "120%"}}>
      <i className="fa fa-map-marker"></i> {props.address.firstLine}<br/>
        {props.address.city },{props.address.state } - {props.address.pincode} <br/>
      <i class="fa fa-phone"></i>: {props.contacts.telphoneNo}<br/>
      <i class="fa fa-fax"></i>: {props.contacts.fax}<br/>
      <i class="fa fa-laptop"></i>Website - <a href={hospitalWebsite} target="_blank">{props.contacts.website}</a><br/>
    </address>
  );
}

const HospitalDetail = (props) => {

  var medicineTypes = [];
  for(var i=0; i < props.hospital.medicineTypes.length; i++ ) {
    var medType = props.hospital.medicineTypes[i];
    medicineTypes.push(<h5 key={medType}><span>{medType}</span></h5>)
  }

  var imageUrl = constants.IMAGE_BASE_URL + "getImage.php?in=" + props.hospital.name;

  return (
     <div>
       <Row>
          <Col sm={7}>
            <img className="img-responsive" src={imageUrl} onError={(e)=>{e.target.src="http://placehold.it/700x300?text=Image not available"}} alt="750*500" />
          </Col>
          <Col sm={5}>
            <h3> {props.hospital.displayName} </h3>
            {medicineTypes}
            <AddressDetail address={props.hospital.address} contacts={props.hospital.contactDetails}/>
            <a type="button" className="btn btn-primary" onClick={() => props.onClick(props.hospital.uid)}>View Hospital <span class="glyphicon glyphicon-chevron-right"></span></a>
          </Col>
       </Row>
       <hr/>
     </div>
  );
}

class HospitalsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hospitals : [], cityName: ''};
    this.state.cityName = this.props.cityName;
    this.state.searchKey = this.props.searchKey;
    this.handleHospitalViewClick = this.handleHospitalViewClick.bind(this);
  }

  handleHospitalViewClick(hospitalId) {
    this.props.handleSelectedHospital(hospitalId);
  }

  componentDidMount() {
    fetch(constants.REST_API_URL + "/hospital/GetHospitalBySearch/" + this.state.cityName + "?searchKey=" + this.state.searchKey)
     .then(result=>result.json())
     .then(items=> {
       console.log(items);
       this.setState({hospitals: items});
     });
  }

  render() {

    const hospitalComponents = [];
    for(var i=0; i < this.state.hospitals.length ; i++) {
      var hospital = this.state.hospitals[i];
      hospitalComponents.push(<HospitalDetail key={hospital.uid} hospital={hospital} onClick={this.handleHospitalViewClick}/>);
    }

    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <h1 className="page-header">Hospitals <small>{this.props.cityName}</small></h1>
          </Col>
        </Row>
        {hospitalComponents}
      </Grid>
    );
  }
}

export default HospitalsComponent;
