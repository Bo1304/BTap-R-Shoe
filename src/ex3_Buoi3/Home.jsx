import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

export default class Home extends Component {
    products = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 2,
            "name": "Adidas Prophere  BWhite",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 3,
            "name": "Adidas Prophere Customize",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
            "id": 4,
            "name": "Adidas Super Star Red",
            "alias": "adidas-super-star-red",
            "price": 465,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 542,
            "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
            "id": 5,
            "name": "Adidas Swift Run",
            "alias": "adidas-swift-run",
            "price": 550,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 674,
            "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
            "id": 6,
            "name": "Adidas Tenisky Super Star",
            "alias": "adidas-tenisky-super-star",
            "price": 250,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 456,
            "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
            "id": 7,
            "name": "Adidas Ultraboost 4",
            "alias": "adidas-ultraboost-4",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 854,
            "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
            "id": 8,
            "name": "Adidas Yeezy 350",
            "alias": "adidas-yeezy-350",
            "price": 750,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 524,
            "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
            "id": 9,
            "name": "Nike Adapt BB",
            "alias": "nike-adapt-bb",
            "price": 630,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 599,
            "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
        },
        {
            "id": 10,
            "name": "Nike Air Max 97",
            "alias": "nike-air-max-97",
            "price": 650,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 984,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
        },
        {
            "id": 11,
            "name": "Nike Air Max 97 Blue",
            "alias": "nike-air-max-97-blue",
            "price": 450,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 875,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
        },
        {
            "id": 12,
            "name": "Nike Air Max 270 React",
            "alias": "nike-air-max-270-react",
            "price": 750,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 445,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
        }
    ];
    state = {
         selectProduct: null,
        cart: [],
    };

    // them vao gio hang
    addToCart = (item) => {
        const cartItem = { product: item, quantity: 1 };

        // tạo thêm biến clone để copy từ mảng chính sau đó chỉnh sửa xong r thêm lại mảng chính
        const cloneCart = [... this.state.cart];
        const foundItem = this.state.cart.find((cartItem) => {
            return cartItem.product.id === item.id;
        })

        if (foundItem) {
            // tang SL
            foundItem.quantity += 1;

        } else {
            // them cartItem moi vao gio hang
            cloneCart.push(cartItem);
            alert("add success");
        }

        this.setState({
            cart: cloneCart, // khi cloneCart xong thì lấy nó update vào cart chính 
        },
            () => {
                console.log(this.state.cart);
            })

    }

    // xoa gio hang
    deleteCart = (id) => {
        const cloneCart = [... this.state.cart];


        const index = cloneCart.findIndex((cartItem) => {
            return cartItem.product.id === id;
        })

        // khong tim thay
        if (index === -1) {
            return;
        }
        cloneCart.splice(index, 1);

        // sau do cap nhat lai
        this.setState({
            cart: cloneCart,
        })
        alert("Delete Success")
    }

    // tang SL
    increaseQuantity = (Item) => {
     
        const cloneCart = [... this.state.cart];
        if(Item.quantity < Item.product.quantity)  
        {
            Item.quantity++ ;
        } 
        

        this.setState({
            cart: cloneCart,  
        })

    }
    // giam SL
    decreaseQuantity = (Item) => {
        const cloneCart = [... this.state.cart];
        if(Item.quantity < Item.product.quantity)  
        {
            if(Item.quantity > 1){
                Item.quantity -- ;
            }
        } 
        
        
        
        this.setState({
            cart: cloneCart,
        })
        console.log(Item.quantity);
        return console.log("hjhj");
    }

    //Payment
    payMentProd = () =>{
        let cloneCart = [... this.state.cart];
         cloneCart =[];
        
        this.setState({
            cart: cloneCart ,
        })
    }

    setSelectedProduct = (val) => {
        this.setState({
            selectProduct: val,
        });
    }

    render() {
       
        return (
            <div>
                <div className='container '>
                    <h1> Shopping Online </h1>
                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#cartModal">

                        Giỏ hàng (0)

                    </button>


                    <ProductList products={this.products}
                        setSelectedProduct={this.setSelectedProduct}

                        addToCart={this.addToCart}


                    />
                    {/* <ProductDetails selectProduct={this.state.selectProduct} /> */}
                    {/* {this.state.selectProduct ? <ProductDetails selectProduct={this.state.selectProduct}  /> : null} */}
                    {/* nếu không set điều kiện ngay đây thì khi load trang nó sẽ tự hiểu null và không hiển thị giao diên lên 
                    =>  màn hình trắng */}

                    {this.state.selectProduct && (
                        <ProductDetails selectProduct={this.state.selectProduct} />
                    )}
                

                    <Cart cart={this.state.cart}
                        deleteCart={this.deleteCart}
                        increaseQuantity = {this.increaseQuantity}
                        decreaseQuantity = {this.decreaseQuantity}
                        payMentProd = {this.payMentProd}
                    />
                </div>

            </div>
        );
    }
}
