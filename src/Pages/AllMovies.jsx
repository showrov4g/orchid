import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllMovies = () => {
  const moviesData = useLoaderData();

  return (
    <div className="flex flex-col justify-center items-center space-y-6 my-4"> 
      <div>
        <h1 className="text-5xl font-bold">All Movies</h1>
        <hr className="h-1 bg-black" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {moviesData.map((movie) => (
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={movie.moveposter} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Movie Title: {movie.movetitle}</h2>
              <p>Genre: {movie.genre}</p>
              <p>Duration: {movie.duration} minutes</p>
              <p>Release Year: {movie.releaseyear}</p>
              <p>Rating: {movie.rating}</p>

              <div className="card-actions justify-end">
                <Link to={`/details/${movie._id}`} className="btn btn-primary" >See Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
