import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import HospitalImageComponent from './HospitalMapComponent.js';
import HospitalMapComponent from './HospitalMapComponent.js';
import HospitalRatingComponent from './HospitalRatingComponent';
import HospitalAddressComponent from'./HospitalAddressComponent.js';


class HospitalPageComponent extends React.Component {

  render() {
    return (
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>{{hospital.name}}</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={8}>
              <Row>
                <Col sm={12}>
                  <HospitalImageComponent />
                </Col>
              </Row>
              <Row>
                <HospitalDescriptionComponent />
              </Row>
            </Col>
            <Col sm={4} xs={12}>
              <Row>
                <Col sm={12}>
                  <HospitalAddressComponent />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <HospitalAddressComponent />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <HospitalMapComponent />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
    );
  }

}

export default HospitalPageComponent
