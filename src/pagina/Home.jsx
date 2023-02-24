import React from 'react'
import { Imagenes1, Imagenes2 } from '../componentes/ImagenesHome.jsx'
import '../estilos/home.css';

function Home() {
  return (
    <div className="contenedor">
      <div className="caja">
        <div className="fila">
          <h2>¿Quienes somos?</h2>
          <p className="texto">Somos un negocio de compra y venta de tecnología para hacerla accecible 
          a la mayor cantidad de gente posible pero la verdad no existimos solo soy un pequeño proyecto
          y necesito hacer un espacio de esto la mera verdad</p>
        </div>
        <div className="fila imas">
          <Imagenes1/>
        </div>
      </div>
      <div className="caja">
        <div className="fila imas">
          <Imagenes2/>
        </div>
        <div className="fila">
          <h2>¿Que vendemos?</h2>
          <p className="texto">Puro equipo de calidad y tambien vendemos 
          pero la verdad no nos interesa comprar cosas pero esta pagina 
          va a quedar bien aunque quien sabe si alguien llege a ver esto</p>
        </div>
      </div>
    </div>
  )
}

export { Home }