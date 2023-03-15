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

  const sumaTotal = () => {
    return cart.reduce((total, vln) => (total += vln.cantidad * vln.price), 0);
  };
  

  return (
    <CartContext.Provider value={[cart, setCart, borrarCarrito, borrarUno, sumaTotal]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
