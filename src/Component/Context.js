import React, { Component } from 'react';
import {storeProducts, detailProduct} from "../data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

 state = {
  storeProducts: storeProducts,
  detailProduct: detailProduct
 }

 handleDetail = () => {
   console.log("Hello from handle detail page")
 }

 addToCart = () =>{
  console.log("Hello from item add to cart")
}

 render() {
  return (
   <ProductContext.Provider 
    value = {{
     ...this.state,
     handleDetail: this.handleDetail,
     addToCart: this.addToCart
    }}>
    {this.props.children}
   </ProductContext.Provider>
  )
 }
}

export const ProductConsumer = ProductContext.Consumer;


export default ProductProvider;