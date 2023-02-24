
import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./componentes/Header";
import { Provedor } from "./contextos/contexto";
import { Home } from "./pagina/Home";

function App() {
  return (
    <BrowserRouter>
      <Provedor>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<><Header /><Home /></>} />
          <Route path="/celulares" element={<><Header /><p>celulares</p></>} />
          <Route path="/laptops" element={<><Header /><p>laptops</p></>} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>
      </Provedor>
    </BrowserRouter>
  );
}

export default App
