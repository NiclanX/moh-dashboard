import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './ReportNav.css'

function ReportNavItem({ name, to }) {
    return (
        <NavLink to={to} end>
            <div className="navItem">
                <p>
                    {name}
                </p>
            </div>
        </NavLink>
    )
}

export default ReportNavItem