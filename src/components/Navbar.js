import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className = "blue">
            <div className="nav-wrapper container fixed-nav">
                <a href="http://localhost:3000/" className="nav-text">It's <span className = "movie-text"> MOVIE </span> Time !</a>
            </div>
        </nav>
        </div>    
    )
}

export default Navbar


