import React, { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.svg";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.jpg";

export default function Blog() {
  const [activeTab, setActiveTab] = useState("all");
  const [category, setCategory] = useState("all themes");
  const [search, setSearch] = useState("");

  const tabs = [
    { id: "all", label: "All" },
    { id: "articles", label: "Articles", icon: "📄" },
    { id: "videos", label: "Videos", icon: "▶️" },
    { id: "podcasts", label: "Podcasts", icon: "🎙️" }
  ];

  const categories = [
    "all themes",
    "design",
    "marketing",
    "management",
    "development"
  ];

  const posts = [
    { img: img1, tag: "Podcast", title: "What is traffic arbitrage and does it really make money?", type: "Marketing |", date: "September 4, 2020", time: "36 min" },
    { img: img2, tag: "Article", title: "How to choose the first programming language", type: "Development |", date: "September 1, 2020", time: "15 min" },
    { img: img3, tag: "Video", title: "Should you choose a creative profession?", type: "Design |", date: "August 8, 2020", time: "49 min" },
    { img: img4, tag: "Article", title: "HR statistics: job search, interviews", type: "HR & Recruiting |", date: "August 3, 2020", time: "24 min" },
    { img: img5, tag: "Video", title: "What to do and who to talk to if you want product feedback?", type: "Management |", date: "August 2, 2020", time: "45 min" },
    { img: img6, tag: "Podcast", title: "What are color profiles and how they work", type: "Design |", date: "July 28, 2020", time: "36 min" },
    { img: img7, tag: "Video", title: "Startup: build a team that will live long", type: "Management |", date: "July 15, 2020", time: "45 min" },
    { img: img8, tag: "Article", title: "How to get customers to love your business", type: "Marketing |", date: "July 9, 2020", time: "18 min" }
  ];

  return (
    <div className="py-14">

      {/* HEADER */}
      <div className="text-center">
        <p className="uppercase text-sm tracking-widest text-gray-500">OUR BLOG</p>
        <h1 className="text-4xl font-bold mt-2">Createx School Journal</h1>

        <div className="flex flex-wrap justify-center gap-10 mt-12">
          <div className="flex gap-3">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-lg border text-sm flex items-center gap-1 ${
                  activeTab === tab.id
                    ? "border-red-500 text-red-500"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {tab.icon && <span>{tab.icon}</span>}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-[10px] text-left">
            <label className="text-sm text-gray-500 mb-1">Blog category</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search blog..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-52 pr-10"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
          </div>
        </div>
      </div>

      {/* BLOG CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 mt-16">
        {posts.map((p, i) => (
          <div key={i} className="shadow-md bg-white rounded-lg overflow-hidden">
            <img src={p.img} className="w-full h-56 object-cover" />
            <div className="p-5">
              <span className="text-blue-600 text-sm font-medium">{p.tag}</span>
              <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
                <p>{p.type}</p>
                <p>{p.date}</p>
                <p>{p.time}</p>
              </div>
              <h3 className="font-semibold text-lg mt-3">{p.title}</h3>
              <button className="text-red-500 text-sm mt-4 flex items-center gap-1">
                {p.tag === "Podcast" ? "Listen" : p.tag === "Video" ? "Watch" : "Read"} →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-12 text-gray-600">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>→</button>
      </div>

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
  );
}
