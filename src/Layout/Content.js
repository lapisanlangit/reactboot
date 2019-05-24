import React, { Component } from 'react';
import Satker from '../Component/Satker/Satker';

class Content extends Component {
    render() {
        return (
            <div class="main-panel">
                <div class="content-wrapper">
                    <Satker />
                </div>

                <footer class="footer">
                    <div class="container-fluid clearfix">
                        <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018
              <a href="http://urbanui.com" target="_blank">UrbanUI</a>. All rights reserved.</span>
                        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with
              <i class="mdi mdi-heart-outline text-danger"></i>
                        </span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Content;