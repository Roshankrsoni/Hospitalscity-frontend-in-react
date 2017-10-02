import React from 'react'
import {Grid, Col, Row} from 'react-bootstrap'

class HospitalRatingComponent extends React.Compnent {
  render() {
    return (
      <div className="panel panel-primary ">
        <div className="panel-heading">
          <h3 className="panel-title">Rating</h3>
        </div>
        <div className="panel-body">
          <div className="thumb-rating-overall color-average">
            65% <i className="fa fa-thump-up"></i>
          </div>
          <div className="rev-rating rating-input nopad_i">
          <div className="" ="rev-rating rating-inputnopad_i">
            <i className="glyphicon glyphicon-star"></i>
            <i className="glyphicon glyphicon-star"></i>
            <i className="glyphicon glyphicon-star"></i>
            <i className="glyphicon glyphicon-star"></i>
            <i className="glyphicon glyphicon-star-empty"></i>
          </div>
        </div>
        <div>
          <Col sm={12}>
            <h4>Public Review</h4>
          </Col>
          <div>
            <Col sm={2}>
              Excellent
            </Col>
            <Col sm={10}>
              <div className="progress">
                <div className="progress-bar progress-bar-success"
                  role="progressbar" aria-valuenow="40" aria-valuemin="0"
                  aria-valuemax="100" style="width: 40%">
                  29
                </div>
              </div>
            </Col>
          </div>
          <div>
            <Col sm={2}>
              Good
            </Col>
            <Col sm={10}>
              <div className="progress">
                <div className="progress-bar progress-bar-primary"
                  role="progressbar" aria-valuenow="40" aria-valuemin="0"
                  aria-valuemax="100" style="width: 40%">
                  40
                </div>
              </div>
            </Col>
          </div>
          <div>
            <Col sm={2}>
              Average
            </Col>
            <Col sm={10}>
              <div className="progress">
                <div className="progress-bar progress-bar-info"
                  role="progressbar" aria-valuenow="1" aria-valuemin="0"
                  aria-valuemax="5" style="width: 20%">
                  104
                </div>
              </div>
            </Col>
          </div>
          <div>
            <Col sm={2}>
              Poor
            </Col>
            <Col sm={10}>
              <div className="progress">
                <div className="progress-bar progress-bar-warning"
                  role="progressbar" aria-valuenow="4" aria-valuemin="0"
                  aria-valuemax="5" style="width: 80%">
                    40
                <div>
              </div>
            </Col>
          </div>
          <div>
          	<Col sm={2}>
              Wrost
            </Col>
            <Col sm={10}>
              <div class="progress">
                <div class="progress-bar progress-bar-danger  "
                  role="progressbar" aria-valuenow="2" aria-valuemin="0"
                  aria-valuemax="5" style="width: 40%">
                  12
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}
