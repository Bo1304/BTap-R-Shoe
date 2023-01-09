import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Child1 from './Child1';
export default class Parents extends Component {
  fullName = "Ly Quoc Thinh"

  chilDren = [
    {
      name: 'thinh',
      avatar: 'ahahhah',
      mssv: 123
    },
    {
      name: 'bo',
      avatar: 'hjhjhj',
      mssv: 456
    },
    {
      name: 'zy',
      avatar: 'hohoho',
      mssv: 789
    }
  ];


renderChildren = () => {
  const htmlArr = this.chilDren.map((item) =>{
    return <Child1 setAvatar = {this.props.setAvatar} key={item.mssv} item = {item} />

    //  => [ child item = {" thinh]"} ] ,  [ child item = {" bo]"} ] , [ child item = {" zy]"} ]
  });
  return htmlArr;
}

  render() {
    return (
      <div className=" bg-primary  p-3 me-5">
        <h1> Child</h1>
        <h3> Email: {this.props.email}</h3>
        <h3> Age: {this.props.age}</h3>

        {this.renderChildren()}
        {/* < Child1 fname = {this.fullName} e = { this.props.email } a = { this.props.age } 
        setAvatar = { this.props.setAvatar}/> */}
      </div>
    )
  }
}
