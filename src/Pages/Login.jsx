import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-[#219B9D] p-14 rounded-xl space-y-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("Email", { required: true })}
          aria-invalid={errors.Email ? "true" : "false"} 
        />
        {
            errors.Email?.type === 'required' && <p role="alert">Email name is required</p>
        }
        <input
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/i,
          })}
          aria-invalid={errors.Password ? "true" : "false"} 
        />
        {
             errors.Password?.type === 'required' && <p role="alert">Password name is required</p>
        }
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
