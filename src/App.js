
import React, { Component } from 'react'
import Header from './Cockpit/Header'
import Sidebar from './Cockpit/Sidebar';
import Content from './Cockpit/Content';




export default class App extends Component {

  constructor() {
    super()

  }


  render() {

    return (

      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <Content />
        </div>
      </div>
    )
  }
}


