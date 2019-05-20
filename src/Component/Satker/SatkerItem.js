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


                </tr>

            
        );
    }
}

export default SatkerItem;