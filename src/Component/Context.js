import React, { Component } from 'react';
import {storeProducts, detailProduct} from "../data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

 state = {
  products: [],
  detailProduct: detailProduct,
  cart: [],
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
 }, () => {this.addTotal()})
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
  const tempCart = [...this.state.cart];

  let selectedProduct = tempCart.find(item => item.id === id);
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];

  product.count = product.count + 1;
  product.total = product.count * product.price;

  this.setState(() => {
    return{
      cart: [...tempCart]
    }
  }, () => {this.addTotal()})
}

decrement = id => {
  const tempCart = [...this.state.cart];
  let selectedProduct = tempCart.find(item => item.id === id)
  let index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];
  product.count = product.count - 1;
  if(product.count === 0){
    return this.removeItem(id);
  }
  else{
    product.total = product.count * product.price;
    this.setState(() => {
      return {cart: [...tempCart]}
    }, () => this.addTotal())
  }
}

removeItem = id => {
  let tempProduct = [...this.state.products];
  let tempCart = [...this.state.cart];

  tempCart = tempCart.filter(element => element.id !== id)
  const index = tempProduct.indexOf(this.findId(id));
  let removedProduct = tempProduct[index];
   removedProduct.inCart = false;
   removedProduct.count = 0;
   removedProduct.total = 0;

   this.setState(() => {
     return{
       cart: [...tempCart],
       product: [...tempProduct]
     }
   }, () => this.addTotal())
}

clearCart = id => {
  this.setState(() => {
    return {cart: []} 
  }, () => {
    this.setProduct();
    this.addTotal()
  })
}

addTotal = () => {
  let subtotal = 0;
  this.state.cart.map(item => (subtotal += item.total));
  let tempTax = subtotal * 0.03;
  let tax = parseFloat(tempTax.toFixed(2));
  const total = subtotal + tax;
  this.setState(() => {
    return{
      cartSubtotal: subtotal,
      cartTax: tax,
      cartTotal: total
    }
  })
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
     decrement: this.decrement,
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