import React, { Component } from 'react';

class SatkerItem extends Component {


    constructor(props) {
        super(props);


        this.onUbahData = this.onUbahData.bind(this);

    }
    onUbahData(nilai) {
        this.props.onUbahData(nilai)
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.satker.kdsatker}
                </td>
                <td>
                    {this.props.satker.nmsatker}
                </td>
                <td>
                    <div className="template-demo">
                        <button type="button" className="btn btn-primary btn-sm" onClick={this.onUbahData}>Ubah</button>
                        <button type="button" className="btn btn-danger btn-sm">Hapus</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default SatkerItem;