import React from 'react'
import './Style/Nav.css';
import {  NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className='navbar-list'>
        <li>
          <NavLink to="/" activeClassName="active" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/todolist" activeClassName="active">Todo List</NavLink>
        </li>
        <li><NavLink to="/useeffect" activeClassName="active">UseEffect</NavLink></li>
        <li><NavLink to="/covid19" activeClassName="active">Covid 19</NavLink></li>
    </ul>
  )
}
