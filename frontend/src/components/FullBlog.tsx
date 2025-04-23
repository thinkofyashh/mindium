import { AppBar } from "./AppBar"

import { blogs } from "../hooks"
import { Avatar } from "./BlogCard"
export const FullBlog = ({ blog }: { blog: blogs }) => {
    return (
      <>
        <AppBar />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Blog Content */}
            <div className="md:col-span-8">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {blog.title}
              </h1>
              <p className="text-sm text-gray-500 mb-6">
                Posted on 2nd December 2024
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {blog.content}
              </p>
            </div>
  
            {/* Author Sidebar */}
            <div className="md:col-span-4 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md">
              <div className="flex flex-col items-center text-center">
                <Avatar authorName={blog.author.name} />
                <h2 className="text-xl font-semibold text-gray-800 mt-4">
                  Author
                </h2>
                <p className="text-md text-gray-600 mt-1 mb-4">
                  {blog.author.name}
                </p>
                <p className="text-sm text-gray-500">
                  Passionate writer sharing insights and experiences. Loves to explore and express.
                </p>
              </div>
            </div>
  
          </div>
        </div>
      </>
    );
  };
  