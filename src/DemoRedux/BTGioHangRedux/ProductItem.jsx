import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    console.log(this.props)
    let {maSP, hinhAnh,tenSP,giaBan} = this.props.product;
    return (
      <div className="card">
        <img src={hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button onClick={() => {
      
          }} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}
