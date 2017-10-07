import React from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import * as constants from './../Constants.js'

class HospitalReviewComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reviewComments : props.hospital.reviews,
      author :'',
      comment: '',
      rating: 3
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(constants.REST_API_URL + '/hospital/GetHospitalById/' + this.props.hospital.uid)
     .then(result=>result.json())
     .then(item=> {
       this.setState({reviewComments: item.reviews});
     });
  }

  handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var reviewUrl = constants.SERVER_URL + '/hospital/addHospitalReview/' + this.props.hospital.uid;
    fetch(reviewUrl, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         author: this.state.author,
         comment: this.state.comment,
         rating: this.state.rating,
         createdOn : Date.now()
       })
    });
  }

  render() {

    var reviewComments = this.state.reviewComments;

    var reviewCommentComponent = [];
    for(var i=0; i < reviewComments.length; i++) {
      var reviewComment = reviewComments[i];
      reviewCommentComponent.push(
        <li key={reviewComment.author}>
          <blockquote>
            <strong>{reviewComment.rating} Stars</strong>
            {reviewComment.comment}
            <cite class="clearfix">—{reviewComment.author} on {reviewComment.createdOn}</cite>
          </blockquote>
        </li>
      );
    }

    return (
      <div>
        <ul class="list-unstyled">
          {reviewCommentComponent}
        </ul>

        <form name="reviewForm" onSubmit={this.handleSubmit}>
          <blockquote>
              <strong>{this.state.rating} Stars</strong><br/>
              {this.state.comment} <br/>
              <cite class="clearfix">—{this.state.author}</cite>
          </blockquote>

          <h4>Submit Review</h4>

          <FormGroup controlId="reviewRating">
              <FormControl componentClass="select" value={this.state.rating} name="rating" onChange={this.handleChange} title="Stars">
                 {
                     [5,4,3,2,1].map((option, index) => {
                        return (<option key={index} value={option}>{option}</option>)
                     })
                  }
              </FormControl>
          </FormGroup>
          <FormGroup controlId="reviewComment">
              <FormControl  componentClass="textarea" value={this.state.comment} name="comment" onChange={this.handleChange} placeholder="Your review" title="Review" >
              </FormControl>
          </FormGroup>
          <FormGroup controlId="reviewAuthor">
              <FormControl type="email" value={this.state.author} name="author" onChange={this.handleChange} placeholder="Your email address" title="Email">
              </FormControl>
          </FormGroup>
          <FormGroup>
            <Button type="submit">
              Submit Review
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default HospitalReviewComponent;
