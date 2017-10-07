import React, { Component } from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap'
import {Grid, Row, Col, FormControl, FormGroup, Button, Form} from 'react-bootstrap'
import {Typeahead} from 'react-bootstrap-typeahead'

class PageHeaderSectionComponent extends Component {

  constructor(props) {
    super(props);

    this.state = { options : ["AGARTALA","AGRA","AHMEDABAD","AIZAWL","AJMER","ALAPPUZHA","AMBALA",
                              "AMRITSAR","ANAND","BANGALORE","BARPETA","BASTAR","BEHRAMPUR",
                              "BENGALURU","BHARUCH","BHAVNAGAR","BHIWANI","BHUBANESWAR","BILASPUR",
                              "BURLA","CACHAR","CENTRAL DELHI","CHANDIGARH","CHENNAI",
                              "CHINNA SEERAGAPADI","COCHIN","COLACHEL","CUTTACK","DADRA AND NAGAR",
                              "DAMAN","DARBHANGA","DEHRADUN","DIBRUGARH","DURG","EAST DELHI",
                              "FARIDABAD","FATEHABAD","GANGTOK","GAYA","GHAZIABAD","GOA","GODAVARI",
                              "GODHRA","GORIMEDU","GREATER NOIDA","GURGAON","HALDWANI","HATHRAS",
                              "HAZARIBAGH","HISAR","HOSHIARPUR","HYDERABAD","IMPHAL","INDORE",
                              "JAIPUR","JALANDHAR","JAMMU","JAMNAGAR","JAMSHEDPUR","JHAJJAR","JIND",
                              "JODHPUR","JORHAT","KALAPET","KAMRUP","KANGRA","KANNUR","KANPUR",
                              "KANYAKUMARI","KARAKONAM","KARNAL","KAVARATTI","KOCHI","KOHIMA",
                              "KOLENCHERRY","KOLKATA","KOLLAM","KOTTAYAM","KOZHIKODE","KRISHNA",
                              "KUDUPAKKAM","KURUKSHETRA","LOWER SUBANSIRI","LUCKNOW","LUDHIANA",
                              "MADAGADIPET","MAHENDERGARH","MANGALORE","MANIPUR","MEERUT",
                              "MODAKKALLUR","MOHALI","MORADABAD","MUMBAI","MUZAFFARNAGAR",
                              "MUZAFFARPUR","NAGERCOIL","NARNAUL","NEW DELHI","NOIDA","NORTH DELHI",
                              "NORTH EAST DELHI","NORTH GOA","NORTH WEST DELHI","PALAKKAD","PALWAL",
                              "PANCHKULA","PANGOOR","PANIPAT","PATHANAMTHITTA","PATIALA","PATNA",
                              "PERINTALMANNA","PILLAIYARKUPPAM","PUDUCHERRY","PUNE","RAIPUR","RAJKOT",
                              "RANCHI","REWARI","RISHIKESH","ROHTAK","ROORKEE","ROPAR","ROURKELA",
                              "SAHARANPUR","SECUNDERABAD","SHILLONG","SHIMLA","SIRSA","SONIPAT",
                              "SONITPUR","SOUTH ANDAMAN","SOUTH DELHI","SOUTH EAST DELHI","SOUTH GOA",
                              "SOUTH WEST DELHI","SRINAGAR","SURAT","SURENDRANAGAR","TAWANG","THANE",
                              "THIRUVALLA","THIRUVANANTHAPURAM","THRISSUR","TOHANA","UPPER SUBANSIRI",
                              "VADODARA","VARANASI","VELLORE","VENJARAMOODU","VISAKHAPATNAM","WEST DELHI",
                              "YAMUNANAGAR","ZIRAKPUR"],
                            cityName:'',
                            searchKey:''}

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSearchKey = this.handleSearchKey.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCityChange(selectedValue) {
    this.setState({cityName: selectedValue});
  }

  handleSearchKey(e) {
    this.setState({
      searchKey: e.target.value
    })
  }

  handleSubmit() {
    this.props.onChange(
      {
        cityName: this.state.cityName,
        searchKey: this.state.searchKey        
      }
    );
  }

  render() {

    var options = this.state.options;

    return (
      <header id="page-header">
          <div className="header-content">
              <div class="header-content-inner">
                  <h1>We care about your better health</h1>
                  <hr/>
                  <Grid>
                    <Row>
                       <Col  md={2} mdOffset={3}>
                          <Form>
                            <FormGroup >
                              <Typeahead labelKey="SearchBox" onChange={this.handleCityChange}  id="searchBoxTypeHead" options={options} className="form-control" placeholder="CityName" />
                            </FormGroup>
                          </Form>
                       </Col>
                       <Col  md={4}>
                          <Form style={{textAlign: "left"}}>
                            <FormGroup >
                              <FormControl type="text" placeholder="Search hostpial Name, Specialties, Facilities" value={this.state.searchKey} onChange={this.handleSearchKey} />
                            </FormGroup>
                          </Form>
                       </Col>
                       <Col md={1}>
                         <Form inline style={{paddingLeft: 0}}>
                            <FormGroup >
                              <Button onClick={this.handleSubmit}> Search </Button>
                            </FormGroup>
                         </Form>
                       </Col>
                       <Col md={2}>
                         <form>
                            <div className="form-group">
                              
                            </div>
                         </form>
                       </Col>
                    </Row>
                  </Grid>
                  <p > We are helping you in finding best hospital around you</p>
              </div>
          </div>
      </header>
    );
  }
}

export default PageHeaderSectionComponent;
