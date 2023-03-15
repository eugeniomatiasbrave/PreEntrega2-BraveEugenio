import {createContext} from "react";
export const CartContext = createContext();
import {useState} from "react";


  const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const borrarUno = (id) => {
    const prod = cart.filter((x) => x.id !== id);
    setCart([...prod]);
  };
  const borrarCarrito = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={[cart, setCart, borrarCarrito, borrarUno]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
