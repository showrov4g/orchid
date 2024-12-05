import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
    const [movies, setMovies] = useState();
    useEffect(()=>{
        fetch("https://orchid-server.vercel.app/movies")
        .then(res =>res.json())
        .then(data => setMovies(data))
        .catch(err=>console.log(err))
    },[])
  return <div>
        
        <div>
          <Link to="/allmovies" className="btn" >See All Movies</Link>
        </div>
  </div>;
};

export default Featured;
