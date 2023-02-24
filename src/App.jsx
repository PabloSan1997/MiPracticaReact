
import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./componentes/Header";
import { Home } from "./pagina/Home";

function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="*" element={<p>Error 404</p>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
