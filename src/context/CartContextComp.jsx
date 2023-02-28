import React from "react";
import {CartContext} from './CartContext';
import {useState} from "react";


const CartContextComp = ({children}) => {
   const [cart, setCart]= useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
        {children}
    </CartContext.Provider>
  );  
}; 

export default CartContextComp;

// 