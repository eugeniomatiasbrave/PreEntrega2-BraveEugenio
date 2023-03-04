import {createContext} from "react";
import {useState} from "react";
export const CartContext = createContext (null);


export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);


  const deleteCart = () => {
    setCart([]);
}
    
  return (
    <CartContext.Provider value = {[cart, setCart, deleteCart]}>
        {children}
    </CartContext.Provider>
  );  
}; 



