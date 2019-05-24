import React, { Component } from 'react';

class SatkerItem extends Component {
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
                    <div class="template-demo">
                        <button type="button" class="btn btn-primary btn-sm">Ubah</button>
                        <button type="button" class="btn btn-danger btn-sm">Hapus</button>
                    </div>
                </td>
            </tr>


        );
    }
}

export default SatkerItem;