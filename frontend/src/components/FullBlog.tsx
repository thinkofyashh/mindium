import { AppBar } from "./AppBar"

import { blogs } from "../hooks"
import { Avatar } from "./BlogCard"


import { motion } from "framer-motion";

export const FullBlog = ({ blog }: { blog: blogs }) => {
    return (
      <>
        <AppBar />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
  
            {/* Blog Content */}
            <div className="md:col-span-8">
              
              {/* Title */}
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {blog.title}
              </motion.h1>
  
              {/* Date */}
              <motion.p
                className="text-sm text-gray-500 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                Posted on 2nd December 2024
              </motion.p>
  
              {/* Content */}
              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                {blog.content}
              </motion.p>
            </div>
  
            {/* Author Sidebar */}
            <motion.div
              className="md:col-span-4 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 border border-gray-500/30 shadow-2xl p-8 rounded-3xl flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Avatar authorName={blog.author.name} />
              <h2 className="text-2xl font-bold text-white mt-6">
                Author
              </h2>
              <p className="text-md text-gray-300 mt-2 mb-4">
                {blog.author.name}
              </p>
              <p className="text-sm text-gray-400 px-2">
                Bringing ideas to life — through words and code ✨
              </p>
            </motion.div>
  
          </div>
        </div>
      </>
    );
  };

