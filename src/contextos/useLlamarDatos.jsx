import axios from 'axios';
import React from 'react'

function useLlamarDatos(API) {
    const [info, setInfo] = React.useState([]);
    React.useEffect(
       ()=>{
        (async()=>{
            const conseguir = await axios(API);
            setInfo(conseguir.data.products);
        })();
       }
        ,[]);
        return info;
}

export{useLlamarDatos}