import React, { Component } from 'react';
import SatkerItem from './SatkerItem';
import Addsatker from './Addsatker'

class SatkerList extends Component {

    onTambahData() {
        this.props.onTambahData()

    }

    render() {
        let satkerList;
        if (this.props.satkerList) {
            satkerList = this.props.satkerList.map(satker => {
                return (
                    <SatkerItem key={satker.kdsatker} satker={satker} onUbahData={this.props.onUbahData.bind(this, { kdsatker: satker.kdsatker, nmsatker: satker.nmsatker })} />
                )
            })
        }
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="card-title mb-0">Referensi Satker</h4>
                                <div className="btn-toolbar mb-0 d-none d-sm-block" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-success" onClick={this.onTambahData.bind(this)}>
                                            <i className="mdi mdi-plus-circle"></i> Add
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