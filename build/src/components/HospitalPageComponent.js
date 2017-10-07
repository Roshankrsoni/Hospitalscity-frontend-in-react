import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import HospitalImageComponent from './HospitalImageComponent.js';
import HospitalMapComponent from './HospitalMapComponent.js';
import HospitalAddressComponent from './HospitalAddressComponent.js';
import HospitalDescriptionComponent from './HospitalDescriptionComponent.js';
import * as constants from './../Constants.js'

class HospitalPageComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hospitalId : props.hospitalId,
      hospital : {
        name: '',
        specialties: [],
        facilities: [],
        address: '',
        contactDetails: ''
      }
    }
  }

  componentDidMount() {
    fetch(constants.REST_API_URL + '/hospital/GetHospitalById/' + this.state.hospitalId)
     .then(result=>result.json())
     .then(item=> {
       console.log(item);
       this.setState({hospital: item});
     });
  }

  render() {

    return (
        <div style={{paddingTop: 50}}>
          <Grid>
            <Row>
              <Col sm={12}>
                <h2>{this.state.hospital.name}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={8}>
                <Row>
                  <Col sm={12}>
                    <HospitalImageComponent hospitalName={this.state.hospital.name}/>
                  </Col>
                </Row>
                <Row>
                    <HospitalDescriptionComponent hospital={this.state.hospital} />
                </Row>
              </Col>
              <Col sm={4} xs={12}>
                <Row>
                  <Col sm={12}>
                    <HospitalAddressComponent address={this.state.hospital.address} contacts={this.state.hospital.contactDetails} />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <HospitalMapComponent location={this.state.hospital.location} name={this.state.hospital.name}/>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>

                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }

}

export default HospitalPageComponent
