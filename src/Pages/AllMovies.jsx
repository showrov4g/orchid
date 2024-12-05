import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllMovies = () => {
  const moviesData = useLoaderData();

  return (
    <div>
      <h1>All movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {moviesData.map((movie) => (
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src={movie.moveposter}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Movie Title: {movie.movetitle}</h2>
              <p>Genre: {movie.genre}</p>
              <p>Duration: {movie.duration}</p>
              <p>Release Year: {movie.releaseyear}</p>
              <p>Rating: {movie.rating}</p>

              <div className="card-actions justify-end">
                <Link to={`/details/${movie._id}`}>See Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
