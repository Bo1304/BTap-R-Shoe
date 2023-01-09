import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

export default class ProductItem extends Component {


    render() {
   //    const { image, name, price, description, quantity } = this.props.selectProduct;

        // bốc tách các thuôc tính ra (es6) từ obj
      const { id,image, name, price, description , quantity } = this.props.item;
        return (
            <div>

                <div className="card" >
                    <img src={image} alt="" />
                    <h4>{name}</h4>
                    <h5>Price:{price}</h5>
                    <div className="d-flex" style={{
                        paddingBottom:10 ,
                        paddingTop:20,
                        gap:80
                        }}>
                        <button 
                            onClick={() => {
                                this.props.setSelectedProduct(this.props.item);
                            }}

                            className="btn btn-success me-2"
                            data-bs-toggle="modal" data-bs-target="#detailProductModal"
                            style={{
                                marginLeft:20
                            }}

                        >
                            Detail
                        </button>

                        <button className="btn btn-info me-2"
                        style={{
                            backgroundColor:'black',
                            color:'white', 
                        }}
                            onClick={() => {
                                this.props.addToCart(this.props.item)
                            }}
                        >Add To Cart</button>
                       
                    </div>


                
                    {/* <div className="modal fade" id="adc" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </div> */}
                </div>

               
            </div>
        )
    }
}
