import { useForm } from "react-hook-form";
const AddMovies = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-flow-dense bg-[#219B9D] p-14 rounded-xl space-y-2">
        <div>
        <input
          type="url"
          placeholder="moveposter"
          {...register("moveposter", { required: true })}
        />
        </div>
        <input
          type="text"
          placeholder="movetitle"
          {...register("movetitle", { required: true, min: 1 })}
        />
        <select {...register("genre", { required: true })}>
          <option value="comedy">comedy</option>
        </select>
        <input
          type="number"
          placeholder="duration"
          {...register("duration", { required: true, min: 60 })}
        />
        <select {...register("releaseyear", { required: true })}>
          <option value="2024">2024</option>
        </select>
        <input
          type="text"
          placeholder="reating"
          {...register("reating", { required: true })}
        />
        <textarea {...register("summary", { required: true, min: 10 })} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovies;
