import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    // tạo func renderProduct để hiển thị danh sách Json bên home qua

    // trước khi dùng thì phải MAP nó qua
    renderProduct = () => {
       // const { image, name, price, description, quantity } = this.props.item;
        return this.props.products.map((item) => {
            return (
                <div key={item.id} className=' col-3 ' style={{marginTop:60}}>
                    <ProductItem
                        setSelectedProduct={this.props.setSelectedProduct}
                        item={item}

                        addToCart={this.props.addToCart}

                       
                      
          
                    />
                 
                </div>


            )
        })
    }


    render() {
        return (
            <div>
                <div className=' row  mt-5'>
                    {/* <div className=' col-3 '>
                        <ProductItem />
                    </div>

                    <div className=' col-3 '>
                        <ProductItem />
                    </div>

                    <div className=' col-3 '>
                        <ProductItem />
                    </div> */}

                    {this.renderProduct()}

                </div>

            </div>

        )
    }
}
