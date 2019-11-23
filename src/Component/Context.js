import React, { Component } from 'react';
import {storeProducts, detailProduct} from "../data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

 state = {
  products: [],
  detailProduct: detailProduct,
  cart: storeProducts,
  modelOpen: false,
  modelProduct: detailProduct ,
  cartSubtotal: 0,
  cartTax: 0,
  cartTotal: 0
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
 console.log(tempProduct)
 const index = tempProduct.indexOf(this.findId(id));
 console.log(index);
 const product = tempProduct[index];
 console.log(product);
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

openModel = id => {
  const product = this.findId(id);
  this.setState(() => {
      return{
        modelProduct: product, 
        modelOpen: true}
  })
}

closeModel = () => {
  this.setState(() => {
    return {modelOpen: false}
  })
}

increment = id => {
  console.log("The cart is incremented")
}

decremant = id => {
  console.log("The cart is decremant")
}

removeItem = id => {
  console.log("The cart  has been removed")
}

clearCart = id => {
  console.log("Your Cart has been cleared")
}

 render() {
  return (
   <ProductContext.Provider 
    value = {{
     ...this.state,
     handleDetail: this.handleDetail,
     addToCart: this.addToCart,
     openModel: this.openModel,
     closeModel:this.closeModel,
     increment: this.increment,
     decremant: this.decremant,
     removeItem: this.removeItem,
     clearCart: this.clearCart
    }}>
    {this.props.children}
   </ProductContext.Provider>
  )
 }
}

export const ProductConsumer = ProductContext.Consumer;


export default ProductProvider;