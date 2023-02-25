import React from 'react'
import { useCelulares } from './useCelulares';
import { useLaps } from './useLaptops';

const Contexto = React.createContext();

function Provedor({ children }) {
  const { celulares } = useCelulares();
  const {lap}=useLaps();
  const [buscador1, setBuscador1] = React.useState('');
  const [buscador2, setBuscador2] = React.useState('');
  let datosCel = [];
  let datoLaps = [];
  if (buscador1 === '') {
    datosCel = celulares;
  } else {
    let cadena = celulares;
    datosCel = cadena.filter(elemento => {
      let nombre = elemento.title.toLocaleUpperCase();
      return nombre.includes(buscador1.toLocaleUpperCase());
    });
  }
  if (buscador2 === '') {
    datoLaps = lap;
  } else {
    let cadena = lap;
    datoLaps = cadena.filter(elemento => {
      let nombre = elemento.title.toLocaleUpperCase();
      return nombre.includes(buscador2.toLocaleUpperCase());
    });
  }
  return (
    <Contexto.Provider
      value={{
        datosCel,
        buscador1,
        setBuscador1,
        buscador2,
        setBuscador2,
        datoLaps,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
function useMicontexto() {
  const auth = React.useContext(Contexto);
  return auth;
}
export { Provedor, useMicontexto }