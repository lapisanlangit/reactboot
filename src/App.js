
import React, { Component } from 'react'
import Header from './cockpit/Header'
import Footer from './cockpit/Footer'



export default class App extends Component {

  constructor() {
    super()


  }


  render() {

    return (

      <div className="container-scroller">
        <Header />
        <Footer />

      </div>
    )
  }
}


