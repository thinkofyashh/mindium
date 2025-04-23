import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const AppBar = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-600 to-black p-6 p-6 border-b-4 border-gray-300 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to={'/blogs'}>
        <div className="text-white text-3xl font-semibold tracking-tight cursor-pointer">
          Mindium
        </div>
        </Link>
        <Link to={'/publish'}>
        <button className="bg-animate text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
  New
</button>


   
</Link>


        <div className="flex items-center space-x-4">
          <Avatar authorName="Yash Rawat" />
          <span className="text-white text-lg font-medium">{'Yash Rawat'}</span>
        </div>
      </div>
    </div>
  );
};
