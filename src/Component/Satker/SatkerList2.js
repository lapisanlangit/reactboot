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
            <div class="main-panel">
            <div class="content-wrapper">
              <div class="row">
                <div class="col-12 grid-margin">
                  <div class="card">
                    <div class="card-body">
                                    <h4 className="card-title">Referensi Satker</h4>

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
                </div>
            </div>
        );
    }
}

export default SatkerList;