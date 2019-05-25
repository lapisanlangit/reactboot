import React, { Component } from 'react';
import SatkerItem from './SatkerItem';
import Addsatker from './Addsatker';

import $ from 'jquery';


class SatkerList extends Component {

    constructor() {
        super()
    }

    tambahData() {
        // alert(1)
        // // this.props.ontambahData()
        // $('#ctnRekam').modal();


    }

    componentDidMount(){
        $('button').on('click',function(){
            // alert('test Button')
            $('#ctnRekam').modal('show');
        })
    }

    render() {
        let satkerList;
        if (this.props.satkerList) {
            satkerList = this.props.satkerList.map(satker => {
                return (
                    <SatkerItem key={satker.kdsatker} satker={satker} />
                )
            })
        }
        return (
            <div class="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="card-title mb-0">Referensi Satker</h4>
                                <div class="btn-toolbar mb-0 d-none d-sm-block" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group" role="group" aria-label="First group">
                                        <button type="button" class="btn btn-success" onClick={this.tambahData.bind(this)}>
                                            <i class="mdi mdi-plus-circle"></i> Add
                        </button>
                                    </div>
                                    <button>Test Button</button>


                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                Kode
                                        </th>
                                            <th>
                                                Nama Satker
                                     </th>
                                            <th>
                                                Aksi
                                         </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {satkerList}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <Addsatker/>
                {/* <div class="modal" id="ctnRekam" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>


        );
    }
}

export default SatkerList;