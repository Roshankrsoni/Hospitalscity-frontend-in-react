import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js'
import NavigationMenu from './NavigationMenu.js'
import FooterComponent from './FooterComponent.js'
import BasePageComponent from './BasePageComponent.js'
import PageHeaderSectionComponent from './PageHeaderSectionComponent.js'
import ContactSectionComponent from './ContactSectionComponent.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { currentViewName : "Home"};
    this.changeView = this.changeView.bind(this);
    this.fetchCurrentView = this.fetchCurrentView.bind(this);
  }

  changeView(newView) {
    var baseUrl = window.location.origin;
    window.location.href = baseUrl + "/#" + newView;
    this.setState({
      currentViewName : newView
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

  render() {

    return (
      <div>
        <NavigationMenu onChange={this.changeView}/>
        <BasePageComponent />
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
