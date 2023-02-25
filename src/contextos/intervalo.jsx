import React from 'react'

function useIntervalo() {
    const [margen, setMargen] = React.useState({ marginLeft: 0, transition: 'unset' });
    React.useEffect(
        ()=>{
            setTimeout( ()=>{
                setMargen({ marginLeft:'-100%', transition: 'all 0.5s' });
            },2000);
        }
        ,[]);
    return { margen };
}

export { useIntervalo }