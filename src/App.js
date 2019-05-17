
import React, { Component } from 'react'
import Header from './cockpit/Header'
import Sidebar from './cockpit/Sidebar';
import Content from './cockpit/Content';



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


