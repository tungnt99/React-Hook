import React from 'react'
import './Style/Nav.css';
import {  NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className='navbar-list'>
        <li>
          <NavLink  className={(navData) => (navData.isActive ? "active-style" : 'none')} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todolist" activeClassName="active">Todo List</NavLink>
        </li>
        <li><NavLink to="#contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="#about" activeClassName="active">About</NavLink></li>
    </ul>
  )
}
