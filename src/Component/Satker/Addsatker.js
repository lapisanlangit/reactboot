import React, { Component } from 'react';
import $ from 'jquery';

class Addsatker extends Component {

   constructor (props) {
    super(props);

    this.state = {
      kdsatker:  "",
      nmsatker:  ""
    };
    
    this.onChangekdsatker = this.onChangekdsatker.bind(this);
    this.onChangenmsatker = this.onChangenmsatker.bind(this);
  }

  onChangekdsatker(e) {
    this.setState({
      kdsatker: e.target.value
    });
  }

  onChangenmsatker(e) {
    this.setState({
      nmsatker: e.target.value
    });
  }

  onSimpanData(){
    this.props.simpanData(this.state)
  }

 

  render() {
    return (
      <div className="modal" id="ctnRekam" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">RUH  Satker</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">Kode</label>
                  <div className="col-sm-5">
                  <input type="text" className="form-control" value={this.state.kdsatker} name="kdsatker" id="kdsatker" placeholder="6 digit"  onChange={this.onChangekdsatker} />


                  </div>
                </div>
                <div className="form-group row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Nama</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" value={this.state.nmsatker} name="nmsatker" id="nmsatker" placeholder="Nama Satker"  onChange={this.onChangenmsatker} />
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Tutup</button>
              <button type="button" className="btn btn-primary"  data-dismiss="modal" onClick={this.onSimpanData.bind(this)}>Simpan</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Addsatker; 