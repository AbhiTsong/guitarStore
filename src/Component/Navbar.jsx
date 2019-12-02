import React, { Component } from 'react'
import {Link} from "react-router-dom"
import StyledButton, {NavWrapper} from "./StyledButton"


export default class Navbar extends Component {
 render() {
  return (
   <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
     <Link className="guitar-logo" to="/">
       <h1 >Axe Heros</h1>
     </Link>
      <Link to="/cart" className="ml-auto">
        <StyledButton>
         <span className="mr-2">
          <i className="fas fa-cart-plus" />
         </span>
           my cart
        </StyledButton>
      </Link>
   </NavWrapper>
  )
 }
}


