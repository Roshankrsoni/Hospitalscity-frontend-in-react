import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js'
import NavigationMenu from './NavigationMenu.js'
import FooterComponent from './FooterComponent.js'
import BasePageComponent from './BasePageComponent.js'
import PageHeaderSectionComponent from './PageHeaderSectionComponent.js'
import ContactSectionComponent from './ContactSectionComponent.js';
import HospitalsComponent from './HospitalsComponent.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { currentViewName : "Home", searchResult: ''};
    this.changeView = this.changeView.bind(this);
    this.fetchCurrentView = this.fetchCurrentView.bind(this);
    this.handleSearchResult = this.handleSearchResult.bind(this);
  }

  changeView(newView) {
    var baseUrl = window.location.origin;
    window.location.href = baseUrl + "/#" + newView;
    this.setState({
      currentViewName : newView,
      searchResult: ''
    });
  }

  fetchCurrentView(currentViewName) {
    switch (currentViewName) {
      case "Home":
        return <BasePageComponent />
      case "About":
        return <ContactSectionComponent />
      default:
        return <BasePageComponent />
    }
  }

  handleSearchResult(result) {
    this.setState({
      searchResult: result
    });
  }

  render() {

    let currentView =  <BasePageComponent handleSearchResult={this.handleSearchResult}/>
    if(this.state.searchResult) {
      currentView = <HospitalsComponent cityName={this.state.searchResult}/>
    }

    return (
      <div>
        <NavigationMenu onChange={this.changeView}/>
        {currentView}
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
