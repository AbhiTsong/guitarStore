import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
       
        return (
            <PaypalExpressBtn  onClick ={() => alert("You Payment was successfull. Happy Shopping with us.")} />
        );
    }
}