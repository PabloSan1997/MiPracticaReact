import React from 'react'
import { useParams } from 'react-router-dom'

function Home() {
    const {hola} = useParams();
  return (
    <div>Home {hola}</div>
  )
}

export {Home}