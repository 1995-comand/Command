

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="w-full py-5 bg-transparent">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

             
                <h1 className="text-2xl font-bold text-[#FF3F3A]">
                    CREAT<span className="text-black">EX</span>
                </h1>

               
                <nav>
                    <ul className="flex gap-8 text-gray-700 font-medium">
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/Courses">Courses</Link></li>
                        <li><Link to="/Events">Events</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Contacts">Contacts</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-6">
                    <button className="px-5 py-2 rounded-md bg-[#FF3F3A] text-white font-semibold hover:bg-[#ff544f] transition">
                        Get consultation
                    </button>

                    <Link to="/Login" className="text-sm text-gray-700">
                        Log in / Register
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Header
