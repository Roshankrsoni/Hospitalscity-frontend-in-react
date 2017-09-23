import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';

class ContactSectionComponent extends Component {

 render() {

    const sectionHeading = (
      <Col className="text-center" lg={{size:8, offset:2}}>
          <h2 className="section-heading">Let''s Get In Touch!</h2>
          <hr className="primary" />
          <p>We are happy to hear from you, send us your feedback.</p>
      </Col>
    );

    const phonePart = (
      <Col className="text-center" lg={{size:4, offset:2}} >
        <i className="fa fa-phone fa-3x sr-contact"></i>
        <p>+91-9467461517</p>
      </Col>
    );

    const emailPart = (
      <Col lg={4} className="text-center">
        <i className="fa fa-envelope-o fa-3x sr-contact"></i>
        <p><a href="mailto:apsyfeedback@gmail.com">apsyfeedback@gmail.com</a></p>
      </Col>
    );

    return (
     <section id="contact">
        <Grid>
            <Row>
                {sectionHeading}
                {phonePart}
                {emailPart}
            </Row>
        </Grid>
      </section>
    );
  }
}

export default ContactSectionComponent;
