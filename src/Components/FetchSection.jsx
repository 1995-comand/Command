

// import React, { useEffect, useState }  from "react";
//   const [users, setUsers] = useState([]);

//  let getUsers = async () => {
//     let usersdata = await fetch("https://dummyjson.com/users");
//     let data = await usersdata.json();
//     setUsers(data.users);
//   };


//     useEffect(() => {
//     getUsers();
//   }, []);

// const CoursesSection = () => {
//     return (
//         <section className="w-full py-20 bg-white">
//             <div className="max-w-7xl mx-auto px-6">


//                 <div className="flex justify-between items-center mb-10">
//                     <div>
//                         <p className="text-sm font-semibold text-gray-500 tracking-widest">
//                             READY TO LEARN?
//                         </p>
//                         <h2 className="text-4xl font-bold text-gray-900">
//                             Featured Courses
//                         </h2>
//                     </div>

//                     <button className="px-6 py-3 border border-[#FF3F3A] text-[#FF3F3A] rounded-md font-semibold hover:bg-[#FF3F3A]  hover:text-white ">
//                         View all courses
//                     </button>
//                 </div>




//                 {getUsers.map((e) => (
//                     <div
//                         key={e.id}
//                         className="flex bg-white shadow-md rounded-lg overflow-hidden"
//                     >
//                         <img
//                             src={e.image}
//                             alt=""
//                             className="w-[160px] h-full object-cover"
//                         />


//                         <div className="p-5 flex flex-col gap-3">
//                             <span
//                                 className={`${e.age} px-3 py-1 rounded text-sm w-fit`}
//                             >
//                                 {e.category}
//                             </span>

//                             <h3 className="text-xl font-semibold">{e.title}</h3>

//                             <p className="text-red-500 font-bold">{e.age}</p>

//                             <p className="text-gray-600 text-sm">by {e.username}</p>
//                         </div>
//                     </div>
//                 ))}

//             </div>
//         </section>
//     );
// };

// export default CoursesSection;






// // import React, { useEffect, useState } from "react";

// // const CoursesSection = () => {
// //   const [courses, setCourses] = useState([]);

// //   // Fake API – hozircha qo‘lda yozilgan
// //   const courseData = [
// //     {
// //       id: 1,
// //       image: "https://i.pravatar.cc/150?img=1",
// //       category: "Marketing",
// //       categoryColor: "bg-green-500 text-white",
// //       title: "The Ultimate Google Ads Training",
// //       price: "$100",
// //       author: "Jerome Bell",
// //     },
// //     {
// //       id: 2,
// //       image: "https://i.pravatar.cc/150?img=5",
// //       category: "Management",
// //       categoryColor: "bg-blue-500 text-white",
// //       title: "Product Management Fundamentals",
// //       price: "$480",
// //       author: "Marvin McKinney",
// //     },
// //     {
// //       id: 3,
// //       image: "https://i.pravatar.cc/150?img=10",
// //       category: "HR & Recruiting",
// //       categoryColor: "bg-yellow-500 text-white",
// //       title: "HR Management and Analytics",
// //       price: "$200",
// //       author: "Leslie Alexander",
// //     },
// //   ];

// //   useEffect(() => {
// //     setCourses(courseData);
// //   }, []);

// //   return (
// //     <section className="w-full py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-6">
        
// //         {/* TITLE ROW */}
// //         <div className="flex justify-between items-center mb-10">
// //           <div>
// //             <p className="text-sm font-semibold text-gray-500 tracking-widest">
// //               READY TO LEARN?
// //             </p>
// //             <h2 className="text-4xl font-bold text-gray-900">
// //               Featured Courses
// //             </h2>
// //           </div>

// //           <button className="px-6 py-3 border border-[#FF3F3A] text-[#FF3F3A] rounded-md font-semibold hover:bg-[#FF3F3A] hover:text-white">
// //             View all courses
// //           </button>
// //         </div>

// //         {/* COURSES LIST */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {courses.map((e) => (
// //             <div
// //               key={e.id}
// //               className="flex bg-white shadow-md rounded-lg overflow-hidden"
// //             >
// //               <img
// //                 src={e.image}
// //                 alt=""
// //                 className="w-[160px] h-full object-cover"
// //               />

// //               <div className="p-5 flex flex-col gap-3">
// //                 <span className={`${e.categoryColor} px-3 py-1 rounded text-sm w-fit`}>
// //                   {e.category}
// //                 </span>

// //                 <h3 className="text-xl font-semibold">{e.title}</h3>

// //                 <p className="text-red-500 font-bold">{e.price}</p>

// //                 <p className="text-gray-600 text-sm">by {e.author}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default CoursesSection;


//aS


