import React, { useEffect, useState } from "react";

export default function Coursesbek() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  return (
    <div className="w-full bg-white py-16 flex flex-col items-center px-4">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
        Enjoy your studying!
      </p>
      <h1 className="text-4xl font-bold mb-10 text-center">Our online courses</h1>

      <div className="flex items-center gap-3 mb-10 flex-wrap justify-center">
        <button className="px-4 py-2 bg-red-500 text-white rounded-xl">All</button>
        <button className="px-4 py-2 bg-gray-100 rounded-xl">Marketing</button>
        <button className="px-4 py-2 bg-gray-100 rounded-xl">Management</button>
        <button className="px-4 py-2 bg-gray-100 rounded-xl">HR & Recruiting</button>
        <button className="px-4 py-2 bg-gray-100 rounded-xl">Design</button>
        <button className="px-4 py-2 bg-gray-100 rounded-xl">Development</button>

        <input
          placeholder="Search course..."
          className="border rounded-xl px-3 py-2 ml-4"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {products.map((e, i) => (
          <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
            <div className="h-60 w-full bg-yellow-300 flex items-center justify-center">
              <img src={e.image} alt={e.firstName} className="h-full object-cover" />
            </div>
            <div className="p-5">
              <span className="inline-block px-3 py-1 rounded bg-gray-100 text-sm mb-3">
                User
              </span>
              <h3 className="font-semibold text-lg mb-2">
                {e.firstName} {e.lastName}
              </h3>
              <p className="text-gray-600 mb-1">Age: {e.age}</p>
              <p className="text-sm text-gray-500">Email: {e.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
