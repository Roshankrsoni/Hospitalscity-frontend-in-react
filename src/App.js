import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js'
import FooterComponent from './FooterComponent.js'
import BasePageComponent from './BasePageComponent.js'
import PageHeaderSectionComponent from './PageHeaderSectionComponent.js'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <BasePageComponent />
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
