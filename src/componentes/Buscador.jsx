import React from 'react'
import { useMicontexto } from '../contextos/contexto';

function Buscador() {
  const { buscador1, setBuscador1 } = useMicontexto();
  return (
    <div className="buscador">
      <p className="buscar">Buscador</p>
      <input type="text"
        className="entrada"
        placeholder='Escribir...'
        value={buscador1}
        onChange={(e) => setBuscador1(e.target.value)}
      />
    </div>
  );
}
function Buscador2() {
  const { buscador2, setBuscador2 }=useMicontexto();
  return (
    <div className="buscador">
      <p className="buscar">Buscador</p>
      <input type="text"
       className="entrada" 
       placeholder='Escribir...'
       onChange={(e)=>setBuscador2(e.target.value)}
       value={buscador2}
       />
    </div>
  );
}
export { Buscador, Buscador2 }