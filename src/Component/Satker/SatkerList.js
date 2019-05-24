import React, { Component } from 'react';
import SatkerItem from './SatkerItem';

class SatkerList extends Component {

    constructor() {
        super()
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
                                        <button type="button" class="btn btn-success">
                                            <i class="mdi mdi-plus-circle"></i> Add
                        </button>
                                    </div>


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

            </div>

        );
    }
}

export default SatkerList;