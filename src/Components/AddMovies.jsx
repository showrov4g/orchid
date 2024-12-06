import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddMovies = () => {
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
      duration,
      genre,
      moveposter,
      movetitle,
      rating,
      releaseyear,
      summary,
    };
    console.log(data);
    fetch("https://orchid-server.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movies),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your movies added successfully");
        console.log(data);
      })
      .catch((err) => {
        toast.error(err.message);
        console(err);
      });
  };
  console.log(errors);

  return (
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
            <option value="comedy">comedy</option>
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
              movies Poster Url is required
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
            <option>Select </option>
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
        </label>

        <input className="col-span-2 btn" type="submit" />
      </form>
    </div>
  );
};

export default AddMovies;
