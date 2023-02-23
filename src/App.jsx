import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./components/Inicio";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
//import CompraCartContext from "../context/CompraCartContext";


const App=() => {
  return (
   // <CompraCartContext>
     <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/catalogo" element={<ItemListContainer/>}/> 
        <Route exact path="/category/:category" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/> 
        <Route exact path="/cart" element={<Cart/>} />   
       </Routes>
     </BrowserRouter>
   // </CompraCartContext>
  );
}

export default App;
