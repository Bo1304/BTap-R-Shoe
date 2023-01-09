
import React, { Component } from 'react'

class Child1 extends Component {
    avatar = "hohoho_phimhayvl"; // data de truyen di 

    render() {
        return (
            <div className=" bg-danger  p-3 mb-4">
                <h1> Child</h1>




                {/* <h3> Email: {this.props.e}</h3>
                <h3> Age: {this.props.e}</h3>
                <h3> Name: {this.props.fname}</h3>

                <button
                    onClick={() => this.props.setAvatar(this.avatar) }  >
                    Emit Avatar
                </button> */}
                {/* button dùng để bắn data từ Child để cho Grand nhận dược data */}


                <h3>Name: {this.props.item.name} </h3>
                <h3>Avatar: {this.props.item.avatar}</h3>
        
                <button
                    onClick={() => this.props.setAvatar(this.props.item.name) }  >
                    Emit Avatar
                </button>

            </div>
        );
    }

}
export default Child1;