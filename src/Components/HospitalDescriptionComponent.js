import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class HospitalDescriptionComponent extends React.Component {
  render() {
    return (
      <Col sm={12}>
        <p style="padding: 20px;"></p>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" class="active">
            <a href="/reviewHospital/{{hospitalId}}/#facilities"
              aria-controls="facilities" role="tab" data-toggle="tab">Facilities</a>
          </li>
          <li role="presentation">
            <a href="/reviewHospital/{{hospitalId}}/#specialities"
              aria-controls="specialities" role="tab" data-toggle="tab">Specialities</a>
          </li>
          <li role="presentation" >
            <a href="/reviewHospital/{{hospitalId}}/#tab-review"
              aria-controls="tab-review" role="tab" data-toggle="tab">Review</a>
          </li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="list-type4 tab-pane fade in active" id="facilities">
            <ol class="list-unstyled">
              <li ng-repeat=" facility in hospital.facilies">
                <a>
                  {{facility}}
                </a>
              </li>
            </ol>
          </div>
          <div role="tabpanel" class="list-type5 tab-pane fade" id="specialities">
            <ol class="list-unstyled">
              <li ng-repeat="speciality in hospital.specilites">
                <a>
                  {{speciality}}
                </a>
              </li>
            </ol>
          </div>
          <div role="tabpanel" class="tab-pane fade " id="tab-review">
            <ul class="list-unstyled">
              <li ng-repeat="reviewComments in hospital.reviews">
                <blockquote>
                  <strong>{{reviewComments.rating}} Stars</strong>
                  {{reviewComments.comment}}
                  <cite class="clearfix">—{{reviewComments.author}} on {{reviewComments.createdOn | date}}</cite>
                </blockquote>
              </li>
            </ul>

            <form name="reviewForm" ng-submit="reviewForm.$valid && addReview(hospital.reviews)" novalidate>
                <blockquote ng-show="review.rating">
                    <strong>{{review.rating}} Stars</strong>
                    {{review.comment}}
                    <cite class="clearfix">—{{review.author}}</cite>
                </blockquote>

                 <h4>Submit Review</h4>

                <fieldset class="form-group">
                    <select ng-model="review.rating" class="form-control" ng-options="stars for stars in [5,4,3,2,1]" title="Stars" required>
                        <option value="">Your rating</option>
                    </select>
                </fieldset>
                <fieldset class="form-group">
                    <textarea ng-model="review.comment" class="form-control" placeholder="Your review" title="Review" required></textarea>
                </fieldset>
                <fieldset class="form-group">
                    <input ng-model="review.author" type="email" class="form-control" placeholder="Your email address" title="Email" required>
                </fieldset>
                <fieldset class="form-group">
                    <input type="submit" class="btn btn-primary pull-right" value="Submit Review">
                </fieldset>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default HospitalDescriptionComponent;
