import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MoveDetails = () => {
  const details = useLoaderData();
const navigate = useNavigate();
  const {
    _id,
    duration,
    genre,
    moveposter,
    movetitle,
    rating,
    releaseyear,
    summary,
  } = details;
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
        fetch(`https://orchid-server.vercel.app/movies/${_id}`,{
            method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate('/allmovies')
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div>
      <div className="card card-compact bg-base-100 w-6/12 shadow-xl mx-auto">
        <figure>
          <img src={moveposter} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">Move Title: {movetitle}</h2>
          <p className="text-2xl">Genre: {genre}</p>
          <p className="text-2xl">Duration: {duration}</p>
          <p className="text-2xl">Release Year: {releaseyear}</p>
          <p className="text-2xl">Rating: {rating}</p>
          <p className="text-2xl">Summary: {summary}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={"/"}>Got TO Home</Link>
            </button>
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
            <button className="btn btn-primary">
              Add To Favorite{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveDetails;
