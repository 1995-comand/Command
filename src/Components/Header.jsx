import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/About">Abuot us</Link>
                <Link to="/course">Courses</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Contacts">Contacts</Link>
            </nav>

        </div>
    )
}

export default Header