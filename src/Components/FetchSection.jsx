import React, { useEffect, useState } from "react";

const CoursesSection = () => {
  const [users, setUsers] = useState([]);

  let getUsers = async () => {
    let res = await fetch("https://dummyjson.com/users");
    let data = await res.json();
    setUsers(data.users.slice(0, 6));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
    
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm font-semibold text-gray-500 tracking-widest">
              READY TO LEARN?
            </p>
            <h2 className="text-4xl font-bold text-gray-900">Featured Courses</h2>
          </div>

          <button className="px-6 py-3 border border-[#FF3F3A] text-[#FF3F3A] rounded-md font-semibold hover:bg-[#FF3F3A] hover:text-white">
            View all courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {users.map((e) => (
            <div
              key={e.id}
              className="flex bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={e.image}
                alt={e.firstName}
                className="w-[160px] h-full object-cover"
              />

              <div className="p-5 flex flex-col gap-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm w-fit">
                  {e.company?.department || "Category"}
                </span>

                <h3 className="text-xl font-semibold">
                  {e.firstName} {e.lastName}
                </h3>

                <p className="text-red-500 font-bold">${e.age * 5}</p>

                <p className="text-gray-600 text-sm">by {e.username}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
