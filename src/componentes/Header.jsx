import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/mitomano.svg';
import '../estilos/header.css';
function Header() {
  const seleccionar = (a) => a ? 'mandar activado' : 'mandar';
  return (
    <header className="cabeza">
      <div className="caja">
        <img src={logo} alt="Mi logo" className="foto" />
        <h1>Mi pagina de productos</h1>
      </div>
      <nav className="lista">
        <ul>
          <li>
            <NavLink to="/home" className={({ isActive }) => seleccionar(isActive)}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/celulares" className={({ isActive }) => seleccionar(isActive)}>Celulares</NavLink>
          </li>
          <li>
            <NavLink to="/laptops" className={({ isActive }) => seleccionar(isActive)}>Laptops</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export { Header }