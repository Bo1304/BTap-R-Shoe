import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ProductDetails extends Component {


  render() {

    // bốc nó ra tiếp nè...
     const { image, name, price, description, quantity } = this.props.selectProduct;
    return (
 
      <div> Detail Products11 test

        {/* <!-- Modal --> */}
        <div className="modal fade" id="detailProductModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Detail Products</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
              <table className="table">
              <div className="card p-4">
                <div className="row">
                  <div className="col-5">
                    <img src={image} alt="" />
                  </div>
                  <div className="col-7">
                    <h1> Name:{name}</h1>
                    <p> Price: {price}</p>
                    <p> Desc: {description}</p>
                    <p> Quatity: {quantity}</p>
                  </div>

                </div>
              </div>
              </table>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}
