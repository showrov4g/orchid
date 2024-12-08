import React, { useContext, useState } from "react";
import { data, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Blog = () => {
  const blogData = useLoaderData();
  const [blogs, setBlogs] = useState(blogData);
  const {user} =useContext(AuthContext);

  const blogPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const text = form.text.value;
    const img = form.blogImg.value;
    const blog = { title, img, text };
    fetch("https://orchid-server.vercel.app/blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully post your Blog");
        setBlogs(data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
    e.target.reset;
  };
  return (
    <div>
      <div>
        <div>
          <h1>Blogs</h1>
        </div>
        <div className="space-y-5 ">
          {blogs.map((blog) => (
            <div className="flex items-center justify-center gap-5">
              <div className="w-96 ">
                <img src={blog.img} alt="" />
              </div>
              <div>
                <h1>{blog.title}</h1>
                <p>{blog.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* blog form */}
      <div className="w-96 mx-auto">
        <h1 className="text-3xl text-center font-semibold">Add your blog</h1>
        <form className="flex flex-col space-y-3" action="" onSubmit={blogPost}>
          <label htmlFor="" className="text-2xl font-semibold">
            Title
          </label>
          <input
            className="border-2 outline-none p-3 text-xl"
            type="text"
            name="title"
            required
          />
          <label htmlFor="" className="text-2xl font-semibold">
            Blog Photo url
          </label>
          <input
            type="url"
            name="blogImg"
            className="border-2 outline-none p-3 text-xl"
            required
          />
          <label htmlFor="" className="text-2xl font-semibold">
            Blog Details
          </label>
          <textarea
            className="border-2 outline-none p-3 text-xl"
            name="text"
            id=""
          ></textarea>
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Blog;
