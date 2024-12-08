import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateMovies = () => {
  const { user } = useContext(AuthContext);
  const loaderData = useLoaderData();
  const {_id,email,duration,genre,moveposter, movetitle, rating, releaseyear, summary} = loaderData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      duration,
      genre,
      moveposter,
      movetitle,
      rating,
      releaseyear,
      summary,
    } = data;
    const movies = {
        _id,
      email,
      duration,
      genre,
      moveposter,
      movetitle,
      rating,
      releaseyear,
      summary,
    };
    fetch(`https://orchid-server.vercel.app/movies/${_id}`,{
        method: "PUT",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(movies)
    })
    .then(res=> res.json())
    .then(data => {
        if(data.modifiedCount){
         toast.success("successfully Update")
        }
        if(data.modifiedCount===0){
         toast.error("Already updated")
        }
    })
    .catch(err=>{
        toast.error(err.message);
    })
   
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
        <div>
        <h1 className="text-4xl font-bold">Update your Movies: {movetitle}</h1>
        <hr className="bg-black h-1" />
        </div>
      <div className="flex justify-center items-center w-11/12 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full grid gap-5 bg-[#219B9D] p-14 rounded-xl space-y-2"
        >
          <label
            htmlFor=""
            className="flex flex-col text-xl capitalize text-white"
          >
            {" "}
            Move Poster
            <input
              className="text-black p-2 outline-none rounded-sm"
              type="url"
              placeholder="Move poster URL"
              {...register("moveposter", { required: true })}
              aria-invalid={errors.moveposter ? "true" : "false"}
            />
            {errors.moveposter?.type === "required" && (
              <p className="text-red-600 text-xs" role="alert">
                movies Poster Url is required
              </p>
            )}
          </label>

          <label
            htmlFor=""
            className="flex flex-col text-xl capitalize text-white"
          >
            {" "}
            Movie Title
            <input
              className="text-black p-2 outline-none rounded-sm"
              type="text"
              placeholder="Move Title"
              {...register("movetitle", { required: true, min: 1 })}
              aria-invalid={errors.movetitle ? "true" : "false"}
            />
            {errors.movetitle?.type === "required" && (
              <p className="text-red-600 text-xs" role="alert">
                movies Poster Url is required
              </p>
            )}
          </label>
          <label
            htmlFor=""
            className="flex flex-col text-xl capitalize text-white"
          >
            {" "}
            Genre
            <select
              className="text-black p-2 outline-none"
              {...register("genre", { required: true })}
              aria-invalid={errors.genre ? "true" : "false"}
            >
              {errors.genre?.type === "required" && (
                <p className="text-red-600 text-xs" role="alert">
                  movies Poster Url is required
                </p>
              )}
              <option value=""></option>
              <option value="comedy">comedy</option>
              <option value="drama">drama</option>
              <option value="horror">horror</option>
            </select>
          </label>
          <label
            htmlFor=""
            className="flex flex-col text-xl capitalize text-white"
          >
            Duration
            <input
              className="text-black p-2 outline-none rounded-sm"
              type="number"
              placeholder="duration"
              {...register("duration", { required: true, min: 60 })}
              aria-invalid={errors.duration ? "true" : "false"}
            />
            {errors.duration?.type === "required" && (
              <p className="text-red-600 text-xs" role="alert">
                This field is required;
              </p>
            )}
            {errors.duration?.type === "min" && (
              <p className="text-red-600 text-xs" role="alert">
                Duration must be more than 60
              </p>
            )}
          </label>
          <label
            htmlFor=""
            className="flex flex-col text-xl capitalize text-white"
          >
            {" "}
            Release Year
            <select
              className="text-black p-2 outline-none rounded-sm"
              {...register("releaseyear", { required: true })}
              aria-invalid={errors.releaseyear ? "true" : "false"}
            >
              {errors.releaseyear?.type === "required" && (
                <p className="text-red-600 text-xs" role="alert">
                  movies Poster Url is required
                </p>
              )}
              <option></option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </label>
          <label
            htmlFor=""
            className="flex flex-col text-xl capitalize text-white"
          >
            {" "}
            Rating
            <input
              className="text-black p-2 outline-none rounded-sm"
              type="text"
              placeholder="Rating"
              {...register("rating", { required: true })}
              aria-invalid={errors.rating ? "true" : "false"}
            />
            {errors.rating?.type === "required" && (
              <p className="text-red-600 text-xs" role="alert">
                movies Poster Url is required
              </p>
            )}
          </label>
          <label
            htmlFor=""
            className="flex flex-col col-span-2 text-xl capitalize text-white"
          >
            {" "}
            summery
            <textarea
              className="text-black outline-none"
              {...register("summary", { required: true, min: 10 })}
              aria-invalid={errors.summary ? "true" : "false"}
            />
            {errors.summary?.type === "required" && (
              <p className="text-red-600 text-xs" role="alert">
                movies Poster Url is required
              </p>
            )}
            {errors.summary?.type === "min" && (
              <p className="text-red-600 text-xs" role="alert">
                Summary must be grater than 10 character
              </p>
            )}
          </label>

          <input className="col-span-2 btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateMovies;

// export default UpdateMovies;
