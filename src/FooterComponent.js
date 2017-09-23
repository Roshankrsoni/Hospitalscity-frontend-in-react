import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'

class FooterComponent extends Component {

  render() {

    const addressInFooter = (
      <Col md={4}  xs={12} className="footer-col">
          <h3>Location</h3>
          <p>HillRidge <br/>Hyderabad, Telangana 500081</p>
      </Col>
    );

    var socialSiteRefs = [
      {link:"https://www.facebook.com/PanaceaPlus-1005478542898902", className:"fa fa-fw fa-facebook"},
      {link:"https://plus.google.com/u/4/101372885160459486381", className:"fa fa-fw fa-google-plus"},
      {link:"#", className:"fa fa-fw fa-twitter"},
      {link:"#", className:"fa fa-fw fa-linkedin"},
      {link:"#", className:"fa fa-fw fa-dribbble"}
    ];

    const socailSiteRefLinks = socialSiteRefs.map(socialSiteRef => {
      <li>
          <a href={socialSiteRef.link} class="btn-social btn-outline"><i class={socialSiteRef.className}></i></a>
      </li>
    });

    const socialInFooter = (
      <Col xs={12} md={4} className="footer-col">
          <h3>Around the Web</h3>
          <ul className="list-inline">
              {socailSiteRefLinks}
          </ul>
      </Col>
    );

    const aboutInFooter = (
      <Col xs={12} md={4} className="footer-col">
          <h3>About Panaceaplus</h3>
          <p>Panaceaplus is product from team APSY. ASPY team works hard to widen smile of your family.</p>
      </Col>
    );

    const copyrightInFooter = (
      <Grid>
          <Row>
              <Col lg={12} xs={12} >
                  Copyright &copy; hospitalscity.com 2016
              </Col>
          </Row>
      </Grid>
    );

    return (
      <footer className="text-center">
        <div className="footer-above">
            <Grid>
                <Row>
                    {addressInFooter}
                    {socialInFooter}
                    {aboutInFooter}
                </Row>
            </Grid>
        </div>
        <div className="footer-below">
            {copyrightInFooter}
        </div>
        <div>
            FooterItem
        </div>
     </footer>
    );
  }
}

export default FooterComponent;
