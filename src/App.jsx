import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./components/Inicio";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App=() => {
  return (
  <BrowserRouter>
     <NavBar />
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route exact path="/catalogo" element={<ItemListContainer/>} /> 
        <Route exact path="/category/:category" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />    
      </Routes>
  </BrowserRouter>
  );
}

export default App;
