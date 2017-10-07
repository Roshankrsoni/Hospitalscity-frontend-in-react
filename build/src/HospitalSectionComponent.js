import React, { Component } from 'react';

function HospitalImageBox(props) {
  return (
    <div className="col-lg-4 col-sm-6">
        <a href={props.hospitalImageLink} className="portfolio-box">
            <img src={props.hospitalImageLink} className="img-responsive" alt="" />
            <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                        {props.state}
                    </div>
                    <div className="project-name">
                        {props.hospitalName}
                    </div>
                </div>
            </div>
        </a>
    </div>
  );
}

class HospitalSectionComponent extends Component {

  render() {
     return (
        <section className="no-padding" id="hospitals">
            <div className="container-fluid">
                <div className="row no-gutter popup-gallery">
                    <HospitalImageBox name="Appolo Hospital" state="Delhi" hospitalImageLink="http://hospitalscity.com/getInfoImage.php?in=81" />
                    <HospitalImageBox name="Medanta Hospital" state="Gurgaon" hospitalImageLink="http://hospitalscity.com/getInfoImage.php?in=82" />
                    <HospitalImageBox name="Artimis Hospital" state="Gurgaon" hospitalImageLink="http://hospitalscity.com/getInfoImage.php?in=83" />
                    <HospitalImageBox name="Fortis Hospital" state="Delhi" hospitalImageLink="http://hospitalscity.com/getInfoImage.php?in=84" />
                    <HospitalImageBox name="AIIMS" state="Delhi" hospitalImageLink="http://hospitalscity.com/getInfoImage.php?in=85" />
                    <HospitalImageBox name="CMC" state="Vellore" hospitalImageLink="http://hospitalscity.com/getInfoImage.php?in=86" />
                </div>
            </div>
        </section>
    );
  }
}

export default HospitalSectionComponent;
