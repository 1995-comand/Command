import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="bg-[#1E212C] text-white mt-20 px-10 py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

    <div>
      <h1 className="text-3xl font-bold mb-4">CREATEX</h1>
      <p className="text-gray-400 text-sm leading-relaxed">
        Createx Online School is a leader in online studying. We have lots of
        courses and programs from the main market experts. We provide relevant
        approaches to online learning, internships and employment in the largest
        companies in the country.
      </p>

      <div className="flex gap-4 mt-4 text-xl">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-telegram"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>

    <div>
      <h3 className="font-semibold mb-4 text-lg">SITE MAP</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>About Us</li>
        <li>Courses</li>
        <li>Events</li>
        <li>Blog</li>
        <li>Contacts</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-4 text-lg">COURSES</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>Marketing</li>
        <li>Management</li>
        <li>HR & Recruiting</li>
        <li>Design</li>
        <li>Development</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-4 text-lg">CONTACT US</h3>
      <p className="text-gray-400 text-sm mb-2">📞 (405) 555-0128</p>
      <p className="text-gray-400 text-sm mb-6">✉️ hello@createx.com</p>

      <h3 className="font-semibold mb-3 text-lg">SIGN UP TO OUR NEWSLETTER</h3>
      <div className="flex">
        <input
          type="text"
          placeholder="Email address"
          className="px-4 py-2 rounded-l-lg w-full text-black"
        />
        <button className="bg-red-500 px-4 py-2 rounded-r-lg">→</button>
      </div>
      <p className="text-gray-500 text-xs mt-2">
        *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
      </p>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
    © All rights reserved. Made with ❤️ by Createx Studio
  </div>
</div>
    </div>
  )
}

export default Footer