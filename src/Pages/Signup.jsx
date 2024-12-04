import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="py-10 bg-gray-500 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"} 
        />{
            errors.name?.type === 'required' && toast("Name must enter")
        }
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          aria-invalid={errors.name ? "true" : "false"} 
        />
        {
            errors.email?.type === 'required' && toast("Name must enter")
        }
        <input
          type="url"
          placeholder="Photo URL"
          {...register("Photo URL", { required: true })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            max: 10,
            min: 6,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
