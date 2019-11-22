import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {ProductConsumer} from "../Component/Context";
import StyledButton from "../Component/StyledButton"

export default class Details extends Component {
 render() {
  return (
   <ProductConsumer>
    {value => {const {id, company, img, info,inCart, price, title } = value.detailProduct;
     return(
      <div className="container py-5">
       {/* Title Start */}
        <div className="row">
         <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
         </div>
        </div>
        {/* Title End */}
        {/* Product info */}
        <div className="row">
         <div className="col-10 mx-auto col-md-6 my-3">
          <img src = {img} className="img-fluid" alt="product"/>
         </div>
         <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
           <h2>model: {title}</h2>
           <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
             made by: <span className="text-uppercase">{company} </span>
           </h4>
           <h4 className="text-blue">
             <strong>
              price: <span>Rs</span>{price}
             </strong>
           </h4>
           <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about the product:
           </p>
           <h6 className="text-muted lead">
            {info}
           </h6>
           {/* Cart Buttom Component */}
            <div>
              <Link to="/">
                <StyledButton>
                  Back To Products
                </StyledButton>
              </Link>
              <StyledButton 
                cart
                disabled={inCart ? true : false}
                onClick = {() => value.addToCart(id)}
              >
                {inCart ? "in cart" : "add to cart"}
              </StyledButton>
            </div>
         </div>
        </div>
      </div>
     )
    }}
   </ProductConsumer>
  )
 }
}
