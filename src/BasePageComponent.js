import React, { Component } from 'react';

import ContactSectionComponent from './ContactSectionComponent.js'
import MissionSectionComponent from './MissionSectionComponent.js'
import ServicesSectionComponent from './ServicesSectionComponent.js'
import HospitalSectionComponent from './HospitalSectionComponent.js'
import PageHeaderSectionComponent from './PageHeaderSectionComponent.js'
import QuoteSectionComponent from './QuoteSectionComponent.js'

class BasePageComponent extends Component {
  render() {
    return (
      <div>
          <PageHeaderSectionComponent />
          <MissionSectionComponent />
          <ServicesSectionComponent />
          <HospitalSectionComponent />
          <QuoteSectionComponent />
          <ContactSectionComponent />
      </div>
    );
  }
}

export default BasePageComponent;
