import React, { Component } from 'react';
import SatkerList from './SatkerList'
import Addsatker from './Addsatker'
import $ from 'jquery';

const axios = require('axios');


class Satker extends Component {

    constructor() {
        super();
        this.state = {
            satkers: [],
            rekam: 0,
            satker:{
                kdsatker:'',
                nmsatker:''
            }
           
        }
        this.handleSimpanData = this.handleSimpanData.bind(this);
        this.handleTambahData = this.handleTambahData.bind(this);
        this.handleUbahData = this.handleUbahData.bind(this);
    }
    componentDidMount() {

        axios.get('http://localhost:4000/rsatker/getSatker')
            .then(function (response) {
                // handle success

                this.setState({ satkers: response.data })
            }.bind(this))
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    handleSimpanData(nilai) {
  
        if (this.state.rekam === 1) {
            const satkersCopian = [...this.state.satkers];
            satkersCopian.push(nilai);
            this.setState({ satkers: satkersCopian });
        } else {
            const satkerIndex = this.state.satkers.findIndex(p => {
                return p.kdsatker === nilai.kdsatker;
            });
            const satker = {
                ...this.state.satkers[satkerIndex]
            };

            satker.nmsatker = nilai.nmsatker;
            const satkersCopian = [...this.state.satkers];
            satkersCopian[satkerIndex] = satker;
        
            this.setState({ satkers: satkersCopian });
        }


    }

    handleTambahData() {

        $('#ctnRekam').modal('show');
        $('#kdsatker').focus();
        $('#kdsatker').prop('readonly', false);
        this.setState({satker:{kdsatker:'',nmsatker:''}})
        this.setState({ rekam: 1 });
    }


    handleUbahData(nilai) {
   
        this.setState({satker: nilai,rekam:0}, () => { 
            $('#ctnRekam').modal('show');
            $('#kdsatker').prop('readonly', true);
            $('#kdsatker').val(nilai.kdsatker);
            $('#nmsatker').val(nilai.nmsatker);
            $('#nmsatker').focus();
        });
        

      
    }

    render() {

        return (
            <div>
                <SatkerList satkerList={this.state.satkers} onUbahData={this.handleUbahData.bind(this)} onTambahData={this.handleTambahData} />
                <Addsatker simpanData={this.handleSimpanData}/>
            </div>
        );
    }
}

export default Satker;
