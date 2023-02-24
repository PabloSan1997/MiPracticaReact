
import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./componentes/Header";
import { Provedor } from "./contextos/contexto";
import { Celulares } from "./pagina/Celulares";
import { Home } from "./pagina/Home";
import { Laptops } from "./pagina/Laptops";

function App() {
  return (
    <BrowserRouter>
      <Provedor>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<><Header /><Home /></>} />
          <Route path="/celulares" element={<><Header /><Celulares/></>} />
          <Route path="/laptops" element={<><Header /><Laptops/></>} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>
      </Provedor>
    </BrowserRouter>
  );
}

export default App
