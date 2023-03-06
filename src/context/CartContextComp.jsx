import {createContext, useState } from "react";

export const CartContext = createContext ();


export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  
  
  const removeItem = (id) => {
    const products = cart.filter(x => x.id !== id)
    setCart([...products])
}

  const deleteCart = () => {
    setCart([]);
}
    
  return (
    <CartContext.Provider value = {[cart, setCart, deleteCart, removeItem]}>
        {children}
    </CartContext.Provider>
  );  
}; 

export default CartContextProvider;



