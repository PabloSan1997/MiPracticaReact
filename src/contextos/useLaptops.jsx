import axios from 'axios';
import React from 'react'

function useLaps() {
    const [lap, setLap] = React.useState([]);
    React.useEffect(
       ()=>{
        (async()=>{
            const conseguir = await axios('https://dummyjson.com/products/category/laptops');
            setLap(conseguir.data.products);
        })();
       }
        ,[]);
        return {lap}
}

export{useLaps}