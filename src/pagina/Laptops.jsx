import React from 'react'
import { Buscador2 } from '../componentes/Buscador'

function Laptops() {
  return (
    <>
      <div className="cabezon">
        <h2>Laptops</h2>
        <p className="texto">Estas son todas las computadoras 
        de segunda mano disponibles, los precios cambian sin
         previo avizo y no se aceptan devoluciones ni garantia</p>
      </div>
      <Buscador2 />
    </>
  )
}

export { Laptops }