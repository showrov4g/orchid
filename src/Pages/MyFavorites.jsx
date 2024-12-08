
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyFavorites = () => {
  const [favorite, setFavorite] =useState()

  useEffect(()=>{
    fetch('https://orchid-server.vercel.app/favorite')
    .then(res=>res.json())
    .then(data => {
      setFavorite(data);
    })
    .catch(err=>{
      toast.error(err.message)
    })
  },[]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://orchid-server.vercel.app/favorite${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate("/allmovies");
            }
          })
          .catch((err) => {toast.error(err.message)});
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-6 my-4">
        <div>
          <h1 className="text-5xl font-bold">All Favorite</h1>
          <hr className="h-1 bg-black" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favorite?.map((fav) => (
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={fav.moveposter} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Movie Title: {fav.movetitle}</h2>
                <p>Genre: {fav.genre}</p>
                <p>Duration: {fav.duration} minutes</p>
                <p>Release Year: {fav.releaseyear}</p>
                <p>Rating: {fav.rating}</p>
              </div>
              <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
