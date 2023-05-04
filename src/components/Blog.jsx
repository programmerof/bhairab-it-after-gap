import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: 'hg1u54oagxq7',
      accessToken: '7CS4_8RGyDCl89YavvuH3GY1QZv6bf5bO0_3pqYnyWw',
     
    });
    

    client
      .getEntries()
      .then((response) => {
        setBlogs(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <a
            key={blog.sys.id}
            href={`/blog/${blog.sys.id}`}
            className="bg-white shadow rounded-lg p-6 block hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2">{blog.fields.title}</h2>
            <p className="text-gray-700">{blog.fields.body}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
