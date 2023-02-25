import React from 'react'
import { Buscador } from '../componentes/Buscador'
import { Datos } from '../componentes/DatosCelulares'
import { useMicontexto } from '../contextos/contexto';
import '../estilos/celulares.css';

function Celulares() {

  const {datosCel}=useMicontexto();
  return (
    <>
        <div className="cabezon">
            <h2>Celulares disponibles</h2>
            <p className="texto">Estos son todos nuestros smartphones disponibles para vender,
            el precio puede cambiar sin previo avizo</p>
        </div>
        <Buscador/>
        <Datos datos={datosCel}/>
    </>
  )
}
export{Celulares}