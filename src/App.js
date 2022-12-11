import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ClickCount from "./components/ClickCount/ClickCount";

//1 importamos los componentes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ClickCount stock="10"/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryID" element={<ItemListContainer />} />
        <Route path="/item/:itemID" element={<ItemDetailContainer />} />

        <Route path="/contacto/" element={<Contacto />} />

        <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;