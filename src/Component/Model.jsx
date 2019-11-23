import React, { Component } from 'react'
import {ProductConsumer} from "./Context";
import {Link} from "react-router-dom";
import StyledButton from "../Component/StyledButton";
import styled from "styled-components"

class Model extends Component {
 render() {
  return (
   <ProductConsumer>
    {(value) => {
      const {modelOpen, closeModel} = value;
      console.log(value.openModel)
      const {img, title, price} = value.modelProduct;

      if(!modelOpen){
       return null;
      }else{
       return(
        <ModelContainer>
         <div className="container">
          <div className="row">
            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                <h5>Item added tocart</h5>
                <img src={img} className="img-fluid" alt="Cart Item"/>
                <h5>{title}</h5>
                <h5>Price:<span> Rs </span>{price}</h5>
                <Link to="/">
                 <StyledButton onClick={() => closeModel()}
                 >
                  Store
                 </StyledButton>
                </Link>
                <Link to="/cart">
                 <StyledButton 
                 cart
                 onClick={() => closeModel()}
                 >
                  Go to Cart
                 </StyledButton>
                </Link>
            </div>
          </div>
         </div>
        </ModelContainer>
       )
      }
    }}
    
   </ProductConsumer>
  )
 }
}

const ModelContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
justify-content: center;
align-items:center;
#modal{
 background: var(--mainWhite);
} 
`

export default Model;