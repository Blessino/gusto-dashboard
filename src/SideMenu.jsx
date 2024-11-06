import React from 'react'
import { NavLink } from 'react-router-dom'
import Dashboard from './Dashboard'

function Sidebar() {
  return (
    <aside>
        <ul>
            <li><NavLink to={Dashboard}>
            <span>Dashboard</span>
            </NavLink>
            </li>
            <li><NavLink to={Dashboard}>
            <span>Dashboard</span>
            </NavLink>
            </li>
            <li><NavLink to={Dashboard}>
            <span>Dashboard</span>
            </NavLink>
            </li>
            <li><NavLink to={Dashboard}>
            <span>Dashboard</span>
            </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar