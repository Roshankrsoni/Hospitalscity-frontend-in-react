import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'

class MissionSectionComponent extends Component {
  render() {
    return (
      <section className="bg-primary" id="about">
          <Grid>
              <Row>
                  <Col lg={{size:8, offset:2 }} className="text-center">
                      <h2 className="section-heading">We have got what you need!</h2>
                      <hr className="light" />
                      <p className="text-faded">In case of medical emergency or to have a better health you should know where you can get better health checkups and you can get best specialist according to people review. </p>
                      <a href="http://hospitalscity.com/#portfolio" className="page-scroll btn btn-default btn-xl sr-button">Hospitals</a>
                  </Col>
              </Row>
          </Grid>
      </section>
    );
  }
}

export default MissionSectionComponent;
