import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
      <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className = 'navbar-title' >
                    Symphony Orchestra <i className="fas fa-music" />
                </Link>

            </div>

        </nav>
      </>
    )
}

export default Navbar
