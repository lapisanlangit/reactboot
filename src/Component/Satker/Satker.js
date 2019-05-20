import React, { Component } from 'react';
import SatkerList from './SatkerList'
const axios = require('axios');


class Satker extends Component {

    constructor() {
        super();
        this.state = {
            satkers: []
        }

    }
    componentDidMount() {

        axios.get('http://localhost:4000/rsatker/getSatker')
            .then(function (response) {
                // handle success
             
                this.setState({satkers:response.data})
            }.bind(this))
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        


    }
    render() {
        // console.log(this.state.satkers)
        return (
            <div>
                <SatkerList  satkerList={this.state.satkers}/>
            </div>
        );
    }
}

export default Satker;
