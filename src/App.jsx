import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CartContextProvider  from "./context/CartContextComp";
import Footer from "./components/Footer";
import Ofertas from "./components/Ofertas";


const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/catalogo" element={<ItemListContainer/>} />
          <Route exact path="/category/:category" element={<ItemListContainer/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
          <Route exact path="/Cart" element={<Cart/>} />
          <Route exact path="/Checkout" element={<Checkout/>} />
          <Route exact path="/Ofertas" element={<Ofertas/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
