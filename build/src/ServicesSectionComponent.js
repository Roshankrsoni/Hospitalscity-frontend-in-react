import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';

function ServiceBox(props) {
  return (
    <Col lg={3} md={6} className="text-center">
        <div className="service-box">
            <i className={props.style}></i>
            <h3>{props.title}</h3>
            <p className="text-muted">{props.description}</p>
        </div>
    </Col>
  );
}

class ServicesSectionComponent extends Component {
  render() {
    return (
      <section id="services">
          <Grid>
              <Row>
                  <Col lg={12} className="text-center">
                      <h2 className="section-heading">At Your Service</h2>
                      <hr className="primary" />
                  </Col>
              </Row>
          </Grid>
          <Grid>
              <Row>
                  <ServiceBox style="fa fa-4x fa-diamond text-primary sr-icons" title="Hospital Around" description="You can search for all hospitals in a city" />
                  <ServiceBox style="fa fa-4x fa-paper-plane text-primary sr-icons" title="Save life" description="You can review about a hospital and helps other for best" />
                  <ServiceBox style="fa fa-4x fa-newspaper-o text-primary sr-icons" title="Up to Date" description="You will get all contact details for hospital" />
                  <ServiceBox style="fa fa-4x fa-heart text-primary sr-icons" title="Made with Love" description="We love to see you and your family happy" />
              </Row>
          </Grid>
      </section>
    );
  }
}

export default ServicesSectionComponent;
