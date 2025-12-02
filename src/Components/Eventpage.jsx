
import React from "react";
import Header from "./Header";

export default function EventPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

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