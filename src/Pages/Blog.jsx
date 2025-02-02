import React, { useContext, useState } from "react";
import { data, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Blog = () => {
  const blogData = useLoaderData();
  const [blogs, setBlogs] = useState(blogData);
  const { user } = useContext(AuthContext);

  const{photoURL, displayName} = user

  const blogPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const text = form.text.value;
    const img = form.blogImg.value;
    const blog = { title, img, text, photoURL,displayName };
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
      })
      .catch((err) => {
        toast.error(err.message);
      });
    e.target.reset;
  };
  return (
    <div>
      <div className="my-4 w-3/4 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold my-4">Blogs</h1>
        </div>
        <div className="space-y-5 ">
          {blogs.map((blog) => (
            <div className="md:flex items-center justify-center gap-5">
              <div className="w-2/3 ">
                <img src={blog.img} alt="" />
              </div>
              <div className=" space-y-4">
                <h1 className="text-2xl font-semibold">{blog.title}</h1>
                <p>{blog.text}</p>

                <div className="flex justify-start items-center gap-5">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={blog.photoURL} />
                    </div>
                  </div>
                  <p className="text-xs font-bold">{blog.displayName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* blog form */}
      <div className="md:w-96 mx-auto mt-52">
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
