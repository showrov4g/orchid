import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Featured = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch("https://orchid-server.vercel.app/movies?limit=6")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => {
        toast.error(err.message)
      });
  }, []);

  return (
    <div className="my-12">
      <div className="flex flex-col justify-center items-center space-y-7">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Featured Movies</h1>
          <hr className= "h-1 bg-black" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {movies?.map((movie) => (
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
                     <p>Duration: {movie.duration} minutes</p>
                     <p>Release Year: {movie.releaseyear}</p>
                     <p>Rating: {movie.rating}</p>
       
                     <div className="card-actions justify-end">
                       <Link to={`/details/${movie._id}`} className="btn btn-primary">See Details</Link>
                     </div>
                   </div>
                 </div>
        ))}
        </div>
        <Link to="/allmovies" className="btn btn-primary">
          See All Movies
        </Link>
      </div>
    </div>
  );
};

export default Featured;
