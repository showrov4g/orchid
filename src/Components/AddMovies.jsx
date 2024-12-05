import { useForm } from "react-hook-form";

const AddMovies = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const{duration, genre, moveposter, movetitle, rating, releaseyear, summary} =data;
    const movies = {duration, genre, moveposter, movetitle, rating, releaseyear, summary}
    console.log(data)
    fetch('https://orchid-server.vercel.app/movies',{
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(movies)
    })
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(err => console(err))
  };
  console.log(errors);

  return (
    <div className="flex justify-center items-center w-11/12 mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full grid gap-5 bg-[#219B9D] p-14 rounded-xl space-y-2"
      >
        <label htmlFor="" className="flex flex-col text-xl capitalize text-white"> Move Poster
          <input
            className="text-black p-2 outline-none rounded-sm"
            type="url"
            placeholder="Move poster URL"
            {...register("moveposter", { required: true })}
          />
        </label>

    <label htmlFor="" className="flex flex-col text-xl capitalize text-white"> Movie Title
    <input
    className="text-black p-2 outline-none rounded-sm"
          type="text"
          placeholder="Move Title"
          {...register("movetitle", { required: true, min: 1 })}
        />
    </label>
    <label htmlFor="" className="flex flex-col text-xl capitalize text-white"> Genre
    <select className="text-black p-2 outline-none" {...register("genre", { required: true })}>
          <option value="comedy">comedy</option>
        </select>
    </label>
    <label htmlFor="" className="flex flex-col text-xl capitalize text-white">Duration
    <input
    className="text-black p-2 outline-none rounded-sm"
          type="number"
          placeholder="duration"
          {...register("duration", { required: true, min: 60 })}
        />
    </label>
    <label htmlFor="" className="flex flex-col text-xl capitalize text-white"> Release Year
    <select className="text-black p-2 outline-none rounded-sm" {...register("releaseyear", { required: true })}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
    </label>
    <label htmlFor="" className="flex flex-col text-xl capitalize text-white"> Rating
    <input
    className="text-black p-2 outline-none rounded-sm"
          type="text"
          placeholder="reating"
          {...register("rating", { required: true })}
        />
    </label>
        <label htmlFor="" className="flex flex-col col-span-2 text-xl capitalize text-white" > summery
        <textarea className="text-black outline-none"
         
          {...register("summary", { required: true, min: 10 })}
        />
        </label>

        <input className="col-span-2 btn" type="submit" />
      </form>
    </div>
  );
};

export default AddMovies;
