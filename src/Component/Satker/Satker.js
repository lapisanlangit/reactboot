import React, { Component } from 'react';
import SatkerList from './SatkerList'
import Addsatker from './Addsatker'
import $ from 'jquery';

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

    handleSimpanData(){
        // const persons = [...this.state.satkers];
        // persons.splice(personIndex, 1);
        // this.setState({ persons: persons });

    }
    render() {
        
        return (
            <div>
                <SatkerList  satkerList={this.state.satkers} ontambahData={this.handleSimpanData.bind(this)}/>
                <Addsatker/>
            </div>
        );
    }
}

export default Satker;
