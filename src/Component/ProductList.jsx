import React, { Component } from 'react';
import Title from "./Title";
import Product from "../Component/Product"
import {ProductConsumer} from "../Component/Context";

export default class ProductList extends Component {
 render() {
  return (
   <>
     <div className="py-5">
        <div className="container">
             <Title name="our" title="products"/>
           <div className="row">
            <ProductConsumer>
             {(value) => {
               return value.storeProducts.map(products => {
                return (<Product key = {products.id} products={products}/>)
               })
             }}
            </ProductConsumer>
            </div>  
        </div>
     </div>
   </>
  )
 }
}
