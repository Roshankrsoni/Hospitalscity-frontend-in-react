import React from 'react';

class HospitalImageComponent extends React.Component{
  render() {
    return (
      <div className="media">
        <div className="media-left media-middle">
          <a href="#"> <img className="media-object img-thumbnail"
            src="http://panaceaplus.in/getImage.php?in={{hospital.name}}" alt="">
          </a>
        </div>
        <div className="media-body"></div>
      </div>
    );
  }
}

export default HospitalImageComponent;
