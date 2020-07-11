import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/"><Button variant="outline-primary">Home</Button></Link>
            <Link to="/Movies"><Button variant="outline-primary">Movies</Button></Link>          
            <Link to="/TVShows"><Button variant="outline-primary">TV Shows</Button></Link>                
        </nav>
    )
}

export default Navbar