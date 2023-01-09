import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Parents from './Parents'
import Uncle from './Uncle';
export default class Grand extends Component {
  
    email = " lythinh@gmail.com"
    age = 20;
 
        // avatar = ""
        
    // biến hứng dữ liệu từ Child 
    state = {  avatar : "" }
  
    // hàm set biến hứng, tham số đầu vào dữ liệu từ con truyền ra 
    setAvatar = (dataFromChild) => {
        console.log("dataFromChild", dataFromChild);
        // this.avatar = dataFromChild;
        
        // muốn nhận data ra màn hình phải dùng state. bây giờ mình sẽ dùng set state để thực hiện
        this.setState({
            avatar: dataFromChild,
        })
    }
  render() {
    return (
        <div className = " bg-success  p-3">
        <h1> Grand</h1>
            <div style= {{display: 'flex'}}> 
            < Parents email = { this.email } age = { this.age } 
            setAvatar = { this.setAvatar}   

            />
            
            <Uncle avatar= { this.state.avatar }/>
            </div>
         </div>
    )
  }
}
