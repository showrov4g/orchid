import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch("https://orchid-server.vercel.app/movies?limit=6")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(movies);
  return (
    <div>
      <div>
        
        <div className="grid grid-cols-3 gap-6">
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
                       <Link to={`/details/${movie._id}`}>See Details</Link>
                     </div>
                   </div>
                 </div>
        ))}
        </div>
        <Link to="/allmovies" className="btn">
          See All Movies
        </Link>
      </div>
    </div>
  );
};

export default Featured;
