
import React, { Component } from 'react'
import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar';
import Content from './Layout/Content';
import Satker from './Component/Satker/Satker';
 

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
          <Satker/>
          {/* <Content /> */}
        </div>
      </div>
    )
  }
}

export default App;
