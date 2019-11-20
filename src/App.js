import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route, Switch} from "react-router-dom";

import Navbar from "./Component/Navbar"
import ProductList from "./Component/ProductList"
import Details from "./Component/Details"
import Cart from "./Component/Cart"
import Default from "./Component/Default"




class App extends React.Component {
  render(){    
    return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route component={Default}/>
    </Switch>
    </>
  );
  }
}

export default App;
