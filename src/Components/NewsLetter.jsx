import React from 'react';

const NewsLetter = () => {
    return (
        <div className="w-11/12 md:w-5/6 mx-auto px-4 py-10 my-8 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 shadow-md">
        <div className="w-full md:w-3/6 mx-auto">
          <h1 className=" text-4xl font-bold">Don't miss new posts!</h1>
          <h5 className="text-2xl font-semibold">Subscribe to movies blog newsletter to get updates on new posts.</h5>
          <div>
            <form className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default NewsLetter;