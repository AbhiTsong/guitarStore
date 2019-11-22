import React, { Component } from 'react';
import {storeProducts, detailProduct} from "../data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

 state = {
  products: [],
  detailProduct: detailProduct,
  cart: []
 }

 componentDidMount(){
   this.setProduct()
 }

 setProduct = () => {
   let tempProduct = [];
   storeProducts.forEach(item => {
     const singleItem = {...item};
     tempProduct = [...tempProduct, singleItem];
   });
   this.setState(() => {
     return {products: tempProduct}
   })
 }

 findId = id => {
   const product = this.state.products.find(product => product.id === id)
   return product
 }

 handleDetail = id => {
   const product = this.findId(id);
   this.setState(() => {
    return {detailProduct: product}
   })
 }

 addToCart = (id) =>{
 const tempProduct = [...this.state.products];
 const index = tempProduct.indexOf(this.findId(id));
 const product = tempProduct[index];
 product.inCart = true;
 product.count = 1;
 const price = product.price; 
 product.total = price;
 this.setState(() => {
    return {
      products: tempProduct,
      cart: [...this.state.cart, product]
    }
 }, () => {console.log(this.state)})
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