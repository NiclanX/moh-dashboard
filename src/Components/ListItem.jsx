import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome, FaCheck } from "react-icons/fa";
import './ListItem.css'

function ListItem({ name, to, func, compon }) {

    if (!to) {

        return (
            <Link to={to}>
            <div className="listitem" onClick={func}>
                {compon}
                <p>{name}</p>                
            </div>
         </Link>
        )
        
    }

    return (
       <NavLink to={to}>
            <div className="listitem" onClick={func}>
                {compon}
                <p>{name}</p>                
            </div>
       </NavLink>
     
    )
}

export default ListItem