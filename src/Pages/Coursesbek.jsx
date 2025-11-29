import React from "react";

export default function CoursesPage() {
  const courses = [
    {
      tag: "Marketing",
      title: "The Ultimate Google Ads Training Course",
      price: "$100",
      author: "Jerome Bell",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
    },
    {
      tag: "Management",
      title: "Product Management Fundamentals",
      price: "$480",
      author: "Marvin McKinney",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    },
    {
      tag: "HR & Recruiting",
      title: "HR Management and Analytics",
      price: "$200",
      author: "Leslie Alexander Li",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaZsIghwQctRWf88f4E5vItlo_zM2Q6k5YA&s",
    },
    {
      tag: "Marketing",
      title: "Brand Management & PR Communications",
      price: "$350",
      author: "Kristin Watson",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/250px-Arnold_Schwarzenegger_1974.jpg",
    },
    {
      tag: "Design",
      title: "Graphic Design Basic",
      price: "$500",
      author: "Guy Hawkins",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Angelina_Jolie_Cannes_2011.jpg/250px-Angelina_Jolie_Cannes_2011.jpg",
    },
    {
      tag: "Management",
      title: "Business Development Management",
      price: "$400",
      author: "Dianne Russell",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Yulduz_Ibragimovna_Usmonova.jpg/250px-Yulduz_Ibragimovna_Usmonova.jpg",
    },
    {
      tag: "Development",
      title: "Highload Software Architecture",
      price: "$600",
      author: "Brooklyn Simmons",
      img: "https://www.billboard.com/wp-content/uploads/2024/07/eminem-hwof-2020-billboard-1548.jpg",
    },
    {
      tag: "HR & Recruiting",
      title: "Human Resources – Selection and Recruitment",
      price: "$150",
      author: "Kathryn Murphy",
      img: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20250712_BLP504.jpg",
    },
    {
      tag: "Design",
      title: "User Experience. Human-centered Design",
      price: "$240",
      author: "Cody Fisher",
      img: "https://m.media-amazon.com/images/M/MV5BZGU0M2U5NmItZWQ0MS00YzJiLWIwZDctNTYzMjY1NjJiYmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
  ];

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
        {courses.map((e, i) => (
          <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
            <div className="h-60 w-full bg-yellow-300 flex items-center justify-center">
              <img src={e.img} alt={e.title} className="h-full object-cover" />
            </div>
            <div className="p-5">
              <span className="inline-block px-3 py-1 rounded bg-gray-100 text-sm mb-3">
                {e.tag}
              </span>
              <h3 className="font-semibold text-lg mb-2">{e.title}</h3>
              <p className="text-gray-600 mb-1">{e.price}</p>
              <p className="text-sm text-gray-500">by {e.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
