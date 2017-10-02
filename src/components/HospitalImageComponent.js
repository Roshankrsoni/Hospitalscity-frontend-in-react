import React from 'react';
import * as constants from './../Constants.js'

class HospitalImageComponent extends React.Component{
  render() {

    var hospitalUrl = constants.IMAGE_BASE_URL + "getImage.php?in=" + this.props.hospitalName;

    return (
      <div className="media">
        <div className="media-left media-middle">
          <a href="#"> <img className="media-object img-thumbnail"
            src={hospitalUrl} onError={(e)=>{e.target.src="http://placehold.it/700x300?text=Image not available"}} alt="" />
          </a>
        </div>
        <div className="media-body"></div>
      </div>
    );
  }
}

export default HospitalImageComponent;
