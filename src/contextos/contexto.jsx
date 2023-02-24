import React from 'react'
import { useCelulares } from './useCelulares';

const Contexto = React.createContext();

function Provedor({ children }) {
  const { celulares } = useCelulares();
  const [buscador1, setBuscador1] = React.useState('');
  const [buscador2, setBuscador2] = React.useState('');
  let datosCel = [];
  if (buscador1 === '') {
    datosCel = celulares;
  } else {
    let cadena = celulares;
    datosCel = cadena.filter(elemento => {
      let nombre = elemento.title.toLocaleUpperCase();
      return nombre.includes(buscador1.toLocaleUpperCase());
    });

  }
  return (
    <Contexto.Provider
      value={{
        datosCel,
        buscador1,
        setBuscador1,
        buscador2,
        setBuscador2
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