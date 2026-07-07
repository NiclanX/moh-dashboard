import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

function ListItem({ name, to }) {
    return (
        <Link to={to}>
            <div>
                <FaHome />

                <li>{name} </li>
            </div>
        </Link>
    )
}

export default ListItem