<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        
        <div>

     <header className="bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-xl font-extrabold text-gray-900">CREATE<span className="text-red-500">X</span></div>
            <nav className="hidden md:flex gap-6 text-sm text-gray-700">
  <Link to="/">Home</Link>
                <Link to="/About">Abuot us</Link>
                <Link to="/course">Courses</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Contacts">Contacts</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded">Get consultation</button>
            <button className="text-sm text-gray-700">Log in / Register</button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-xs text-pink-500 font-semibold mb-3">ONLINE LECTURE</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Formation of the organizational structure of the company in the face of uncertainty
          </h1>
        </div>
      </header>


        </div>
    )
}

export default Header
=======


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
>>>>>>> a0b5fa75c36a4bcd2f38191a6bd95cdeb03b78a8
