
import React, { Component } from 'react'
import Header from './Layout/Header'
// import Sidebar from './Cockpit/Sidebar';
// import Content from './Cockpit/Content';
//  import Satu from './Empat/satu';

class App extends Component {

  constructor() {
    super()

  }


  render() {

    return (

      <div className="container-scroller">
      
        <Header />
        {/* <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <Content />
        </div> */}
      </div>
    )
  }
}

export default App;
