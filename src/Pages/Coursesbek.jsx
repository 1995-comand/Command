import React, { useEffect, useState } from "react";

export default function CoursesPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "Marketing",
    "Management",
    "HR & Recruiting",
    "Design",
    "Development",
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.users.map((u) => ({
          ...u,
          tag: categories[Math.floor(Math.random() * categories.length)],
        }));

        setProducts(updated);
        setFiltered(updated);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
    let temp = products;

  
    if (category !== "All") {
      temp = temp.filter((p) => p.tag === category);
    }


    if (search.trim() !== "") {
      const s = search.toLowerCase();
      temp = temp.filter((p) =>
        `${p.firstName} ${p.lastName}`.toLowerCase().includes(s)
      );
    }

    setFiltered(temp);
  }, [category, search, products]);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="w-full bg-white py-16 flex flex-col items-center px-4">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
        Enjoy your studying!
      </p>
      <h1 className="text-4xl font-bold mb-10 text-center">Our online courses</h1>

     
      <div className="flex items-center gap-3 mb-10 flex-wrap justify-center">
      
        <button
          onClick={() => setCategory("All")}
          className={`px-4 py-2 rounded-xl ${
            category === "All" ? "bg-red-500 text-white" : "bg-gray-100"
          }`}
        >
          All
        </button>

        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-xl ${
              category === cat ? "bg-red-500 text-white" : "bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
        <input
          placeholder="Search course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-3 py-2 ml-4"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {filtered.map((e, i) => (
          <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
            <div className="h-60 w-full bg-yellow-300 flex items-center justify-center">
              <img
                src={e.image}
                alt={e.firstName}
                className="h-full object-cover"
              />
            </div>
            <div className="p-5">
              <span className="inline-block px-3 py-1 rounded bg-gray-100 text-sm mb-3">
                {e.tag}
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
