import axios from 'axios';
import React from 'react'

function useCelulares() {
    const [celulares, setCelulares] = React.useState([]);
    React.useEffect(
       ()=>{
        (async()=>{
            const conseguir = await axios('https://dummyjson.com/products/category/smartphones');
            setCelulares(conseguir.data.products);
        })();
       }
        ,[]);
        return {celulares}
}

export{useCelulares}