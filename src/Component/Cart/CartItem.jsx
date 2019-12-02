import React from 'react'

export default function CartItem({item, value}) {
 const {id, title, img, price, total, count} = item;
 const {increment, decrement, removeItem} = value;
 return (
  <div className="row my-2 text-capitalize text-center margin-top">
    <div className="col-10 mx-auto col-lg-2">
       <img
         src={img}
         style={{width: "5em", height: "7em"}}
         className="img-fluid rotateimg180"
         alt="product"
       />
    </div>
    <div 
      className="col-10 mx-auto col-lg-2 margin-top">
        <span className="d-lg-none cart-menu">product : </span>{title}
    </div>
    <div className="col-10 mx-auto col-lg-2 margin-top">
        <span className="d-lg-none">price : </span>{price}
    </div>
    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 margin-top">
      <div className="d-flex justify-content-center">
        <div>
          <span className="btn btn-black mx-1 margin-top" onClick={() => decrement(id)}>-</span>
        </div>
        <span className="btn btn-black mx-1 margin-top">{count}</span>
        <div>
          <span className="btn btn-black mx-1 margin-top" onClick={() => increment(id)}>+</span>
        </div>
      </div>
    </div>
    {/*  */}
    <div className="col-10 mx-auto col-lg-2">
      <div className="cart-icon margin-top" onClick={() => removeItem(id)}>
        <i className="fas fa-trash"/>
      </div>
    </div>
    <div className="col-10 mx-auto col-lg-2 margin-top">
      <strong>item total : Rs {total} </strong>
    </div>
  </div>
 )
}
