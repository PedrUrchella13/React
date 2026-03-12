import React from 'react'

const Header = () => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
            </div>
        </nav>
    )
}

export default Header