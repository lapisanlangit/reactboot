
import React, { Component } from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar';
import Content from './Layout/Content';



 

class App extends Component {

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

export default App;
