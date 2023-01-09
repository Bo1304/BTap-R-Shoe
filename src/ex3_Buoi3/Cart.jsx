import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Cart extends Component {
    countTotalAmount = () => {
        // return tong tien

        // prev gia tri ban dau ,  currentItem SP hien tai
        const totalProduct = this.props.cart.reduce((prevValue, currentItem) =>{
            //lay doi tuong  hien tai ra 
            // sau do cong don` vao prevValue
            return prevValue + (currentItem.quantity * currentItem.product.price);
        },0)
        return totalProduct ;
    }
    renderCart = () => {
        return this.props.cart.map( (item, index) => {
            const {image , name, price , id} = item.product;
            const {quantity} = item;
             index += 1;
            return (
            <tr>
                <td>{index}</td>
                <td><img style= {{ width:60 }} src={image} alt="" /></td>
                <td className={id}>{name}</td>
                <td>
                    <button class="btn btn-info " onClick={()=> {this.props.decreaseQuantity(item)}}> -</button>
                    <span className='m-4'>{quantity}</span>
                    <button class="btn btn-info "onClick={()=>{
                        this.props.increaseQuantity(item)
                    }} > +</button>
                </td>
                <td>{price}</td>
                <td>{price * quantity}</td>
                <td><button class="btn btn-danger " 
                onClick={() =>{
                    this.props.deleteCart(id)
                }}
                > Delete</button></td>
            </tr>
            );
        }) ;
    }

    render() {
        return (
            <div> 

                {/* <!-- Modal --> */}
                <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Cart</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Image</th>
                                            <th>Name Prod</th>
                                            <th>Quatity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                            <th>--</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {this.renderCart()}
                                    </tbody>
                                </table>
                                <h2>Total Checkout: {this.countTotalAmount()}</h2>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick= {()=>{
                                    this.props.payMentProd()
                                }}>Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
