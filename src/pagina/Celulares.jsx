import React from 'react'
import { Buscador } from '../componentes/Buscador'
import { DatosCelulares } from '../componentes/DatosCelulares'
import '../estilos/celulares.css';
function Celulares() {
  return (
    <>
        <div className="cabezon">
            <h2>Celulares disponibles</h2>
            <p className="texto">Estos son todos nuestros smartphones disponibles para vender,
            el precio puede cambiar sin previo avizo</p>
        </div>
        <Buscador/>
        <DatosCelulares/>
    </>
  )
}
export{Celulares}