import React from 'react'
import { useIntervalo } from '../contextos/intervalo';


function Datos({datos}) {
    if(datos.length>=1){
        return (
            <div className="partes">
                {datos.map(elementos=>(
                 <Cajas 
                 key={elementos.id}
                 nombre={elementos.title}
                 descripcion={elementos.description}
                 precio={elementos.price}
                 imagenes={elementos.images}
                 />
                ))}
            </div>
          );
    }
    else{
        return(
            <div className="mensaje">
                <p>Cargando...</p>
            </div>
        );
    }
}
function Cajas({nombre, descripcion, precio, imagenes}){
    const {margen} = useIntervalo(imagenes);
    let estilo = {width:imagenes.length*100+'%'}
    if(estilo.width>'100%'){
        estilo={...estilo, ...margen}
    }
    return (
        <div className="bloque">
            <div className="imagenes">
                <div className="slider" style={estilo}>
                    {imagenes.map(hola=>(
                        <div className="slide" key={hola}>
                            <img src={hola} alt="foto" className='foto'/>
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="titulo">{nombre}</h2>
            <p className="texto descripcion">{descripcion}</p>
            <p className='texto precio'>${precio}</p>
        </div>
    );
}
export{Datos}