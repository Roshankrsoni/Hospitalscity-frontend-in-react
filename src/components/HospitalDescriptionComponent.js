import React from 'react';
import {Grid, Row, Col, Nav, NavItem} from 'react-bootstrap';
import HospitalReviewComponent from './HospitalReviewComponent.js'

class HospitalDescriptionComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'Facilities'
    }

    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(eventKey) {
    this.setState({
      selectedTab: eventKey
    });
  }

  render() {

    var specialityComponents = [];
    for(var i=0; i < this.props.hospital.specialties.length; i++) {
      var speciality = this.props.hospital.specialties[i];
      specialityComponents.push(
        <li key={speciality}>
          <a>
            {speciality}
          </a>
        </li>
      );
    }

    var facilityComponents = [];
    for(var i=0; i < this.props.hospital.facilities.length; i++) {
      var facility = this.props.hospital.facilities[i];
      facilityComponents.push(
        <li key={facility}>
          <a>
            {facility}
          </a>
        </li>
      );
    }

    let currentTabView = null;
    if(this.state.selectedTab == 'Facilities') {
      currentTabView = (<div role="tabpanel" className="list-type4 tab-pane" id="facilities">
        <ol class="list-unstyled">
          {facilityComponents}
        </ol>
      </div>);
    } else if(this.state.selectedTab == 'Specialities') {
      currentTabView = (<div role="tabpanel" className="list-type5 tab-pane" id="specialities">
        <ol class="list-unstyled">
          {specialityComponents}
        </ol>
      </div>);
    } else if(this.state.selectedTab == 'Review') {
      currentTabView = (<div role="tabpanel" class="tab-pane fade " id="tab-review">
        <HospitalReviewComponent hospital={this.props.hospital}/>
      </div>);
    }

    return (
      <Col sm={12}>
        <p></p>
        <Nav bsStyle="tabs" onSelect={this.handleTab}>
          <NavItem eventKey="Facilities" >Facilities</NavItem>
          <NavItem eventKey="Specialities" >Specialities</NavItem>
          <NavItem eventKey="Review" >Review</NavItem>
        </Nav>
        <div class="tab-content">
          {currentTabView}
        </div>
      </Col>
    );
  }
}

export default HospitalDescriptionComponent;
