
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"


const App=() => {
  
  return <BrowserRouter>
     <NavBar />
  <Routes>
    <Route exact path="/" element={  <ItemListContainer greeting={'Bienvenidos!!'}/>}   />
    
    </Routes>
  </BrowserRouter>

};

export default App;
