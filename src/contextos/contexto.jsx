import React from 'react'

const Contexto = React.createContext();

function Provedor({children}) {
  return (
    <Contexto.Provider 
    
    value={{}}
    >
        {children}
    </Contexto.Provider>
  );
}
function useMicontexto(){
    const auth = React.useContext(Contexto);
    return auth;
}
export{Provedor, useMicontexto}