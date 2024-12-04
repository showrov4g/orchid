import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data.name, data.password);

  return (
    <div className="py-10 bg-gray-500 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="name" className="text-2xl !text-start">Enter your Name</label>
        <input
        className="text-3xl p-3 rounded-xl"
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"} 
        />{
            errors.name?.type === 'required' && <p role="alert">First name is required</p>
        }
        <label htmlFor="email">Enter your email</label>
        <input
        className="text-3xl p-3 rounded-xl"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"} 
        />
        {
            errors.email?.type === 'required' && <p role="alert">First name is required</p>
        }
        <label htmlFor="Photo url">Enter your Photo URL</label>
        <input
        className="text-3xl p-3 rounded-xl"
          type="url"
          placeholder="Photo URL"
          {...register("PhotoURL", { required: true })}
        />
        <label htmlFor="password">Set your password</label>
        <input
        className="text-3xl p-3 rounded-xl"
          type="password"
          placeholder="password"
          {...register("password", {
            max: 10,
            min: 6,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
          })}
          aria-invalid={errors.password ? "true" : "false"} 
        />
                {
            errors.password?.type === 'required' && <p role="alert">First name is required</p>
        }

        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
