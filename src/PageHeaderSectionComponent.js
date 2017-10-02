import React, { Component } from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap'
import {Grid, Row, Col} from 'react-bootstrap'
import {Typeahead} from 'react-bootstrap-typeahead'

class PageHeaderSectionComponent extends Component {

  render() {

    var options =["AGARTALA","AGRA","AHMEDABAD","AIZAWL","AJMER","ALAPPUZHA","AMBALA","AMRITSAR","ANAND","BANGALORE","BARPETA","BASTAR","BEHRAMPUR","BENGALURU","BHARUCH","BHAVNAGAR","BHIWANI","BHUBANESWAR","BILASPUR","BURLA","CACHAR","CENTRAL DELHI","CHANDIGARH","CHENNAI","CHINNA SEERAGAPADI","COCHIN","COLACHEL","CUTTACK","DADRA AND NAGAR","DAMAN","DARBHANGA","DEHRADUN","DIBRUGARH","DURG","EAST DELHI","FARIDABAD","FATEHABAD","GANGTOK","GAYA","GHAZIABAD","GOA","GODAVARI","GODHRA","GORIMEDU","GREATER NOIDA","GURGAON","HALDWANI","HATHRAS","HAZARIBAGH","HISAR","HOSHIARPUR","HYDERABAD","IMPHAL","INDORE","JAIPUR","JALANDHAR","JAMMU","JAMNAGAR","JAMSHEDPUR","JHAJJAR","JIND","JODHPUR","JORHAT","KALAPET","KAMRUP","KANGRA","KANNUR","KANPUR","KANYAKUMARI","KARAKONAM","KARNAL","KAVARATTI","KOCHI","KOHIMA","KOLENCHERRY","KOLKATA","KOLLAM","KOTTAYAM","KOZHIKODE","KRISHNA","KUDUPAKKAM","KURUKSHETRA","LOWER SUBANSIRI","LUCKNOW","LUDHIANA","MADAGADIPET","MAHENDERGARH","MANGALORE","MANIPUR","MEERUT","MODAKKALLUR","MOHALI","MORADABAD","MUMBAI","MUZAFFARNAGAR","MUZAFFARPUR","NAGERCOIL","NARNAUL","NEW DELHI","NOIDA","NORTH DELHI","NORTH EAST DELHI","NORTH GOA","NORTH WEST DELHI","PALAKKAD","PALWAL","PANCHKULA","PANGOOR","PANIPAT","PATHANAMTHITTA","PATIALA","PATNA","PERINTALMANNA","PILLAIYARKUPPAM","PUDUCHERRY","PUNE","RAIPUR","RAJKOT","RANCHI","REWARI","RISHIKESH","ROHTAK","ROORKEE","ROPAR","ROURKELA","SAHARANPUR","SECUNDERABAD","SHILLONG","SHIMLA","SIRSA","SONIPAT","SONITPUR","SOUTH ANDAMAN","SOUTH DELHI","SOUTH EAST DELHI","SOUTH GOA","SOUTH WEST DELHI","SRINAGAR","SURAT","SURENDRANAGAR","TAWANG","THANE","THIRUVALLA","THIRUVANANTHAPURAM","THRISSUR","TOHANA","UPPER SUBANSIRI","VADODARA","VARANASI","VELLORE","VENJARAMOODU","VISAKHAPATNAM","WEST DELHI","YAMUNANAGAR","ZIRAKPUR"];

    return (
      <header id="page-header">
          <div className="header-content">
              <div class="header-content-inner">
                  <h1>We care about your better health</h1>
                  <hr/>
                  <Grid>
                    <Row>
                       <Col md={4} mdOffset={4}>
                         <form>
                            <div className="form-group">
                              <Typeahead labelKey="SearchBox"  id="searchBoxTypeHead" options={options} className="form-control" placeholder="CityName" />
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
