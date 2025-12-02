
import React from "react";

export default function EventPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-xl font-extrabold text-gray-900">CREATE<span className="text-red-500">X</span></div>
            <nav className="hidden md:flex gap-6 text-sm text-gray-700">
              <a className="hover:underline" href="#">About Us</a>
              <a className="hover:underline" href="#">Courses</a>
              <a className="hover:underline text-red-500" href="#">Events</a>
              <a className="hover:underline" href="#">Blog</a>
              <a className="hover:underline" href="#">Contacts</a>
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

      <main className="max-w-6xl mx-auto px-6 -mt-6">
        <section className="bg-white rounded-lg shadow-sm p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold mb-6">We will talk about:</h2>
            <ul className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 mt-1">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-500 font-semibold text-sm">–</span>
                </div>
                <div className="ml-4">
                  <div className="text-sm text-red-600 font-semibold">Theme 1. Aliquet lectus urna viverra in odio.</div>
                  <p className="mt-2 text-sm text-gray-600">
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris.
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 mt-1">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pink-50 text-pink-500 font-semibold text-sm">+</span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-semibold">Theme 2. Orci commodo, viverra orci mollis ut euismod.</div>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 mt-1">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pink-50 text-pink-500 font-semibold text-sm">+</span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-semibold">Theme 3. Sagittis vitae facilisi rutrum amet mauris quisque vel.</div>
                </div>
              </li>

              <li className="flex">
                <div className="flex-shrink-0 mt-1">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pink-50 text-pink-500 font-semibold text-sm">+</span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-semibold">Theme 4. In id dolor quis nunc, urna hendrerit pharetra.</div>
                </div>
              </li>
            </ul>

rajabovv_07_05, [29.11.2025 14:43]
</div>

          <aside className="lg:col-span-4 flex items-start">
            <div className="w-full bg-white border border-gray-100 rounded-lg shadow-md p-6">
              <div className="text-xs text-gray-500 tracking-wide">TIME</div>
              <div className="mt-2 text-red-500 font-semibold">August 5, 11:00 - 14:00</div>
              <p className="mt-2 text-sm text-gray-500">Metus turpis sit lorem lacus, in elit tellus lacus.</p>

              <div className="mt-6 text-xs text-gray-500 tracking-wide">PRICE</div>
              <div className="mt-2 text-gray-900 font-semibold">Free</div>
              <p className="mt-2 text-sm text-gray-500">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique orci.</p>

              <a className="block mt-4 text-sm text-pink-500 hover:underline" href="#">EVENT ON FACEBOOK</a>

              <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded">Join the event</button>
            </div>
          </aside>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-500">
        <div className="text-center">© {new Date().getFullYear()} CREATE X. All rights reserved.</div>
      </footer>
    </div>
  );
}