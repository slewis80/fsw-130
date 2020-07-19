import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <nav id="navbar">
            <Link className="navLinks" to="/">Home</Link>
            <Link className="navLinks" to="/movies/search/nowShowing">Now Showing</Link>
            <Link className="navLinks" to="/movies/search">Search Movies</Link>
            <Link className="navLinks" to="/movies/addMovie">Add New Movie</Link>
        </nav>
    )
}

export default Navbar