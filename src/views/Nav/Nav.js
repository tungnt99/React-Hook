import React from 'react'
import './Style/Nav.css';
import {  NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className='navbar-list'>
        <li>
          <NavLink to="/" activeclassname="active" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/todolist" activeclassname="active">Todo List</NavLink>
        </li>
        <li><NavLink to="/useeffect" activeclassname="active">UseEffect</NavLink></li>
        <li><NavLink to="/covid19" activeclassname="active">Covid 19</NavLink></li>
        <li><NavLink to="/blog" activeclassname="active">Blog</NavLink></li>
        <li><NavLink to="/addblog" activeclassname="active">Add New Blog</NavLink></li>

    </ul>
  )
}
