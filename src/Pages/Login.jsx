import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {email, password} = data;
    
  };
  console.log(errors);
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-[#219B9D] p-14 rounded-xl space-y-2"
      >
        <label htmlFor="email" className="text-2xl text-white">
          Email
        </label>
        <input
          className="text-2xl p-3 rounded-xl"
          type="email"
          placeholder="Email"
          {...register("Email", { required: true })}
          aria-invalid={errors.Email ? "true" : "false"}
        />
        {errors.Email?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">
            Email name is required
          </p>
        )}
        <label htmlFor="password" className="text-2xl text-white">
          Password
        </label>
        <input
          className="text-2xl p-3 rounded-xl"
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/i,
          })}
          aria-invalid={errors.Password ? "true" : "false"}
        />
        {errors.Password?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">
            Password name is required
          </p>
        )}
        <input
          className="btn bg-green-600 hover:bg-green-700 text-xl border-none text-white"
          type="submit"
          value="Login Up"
        />
        <p className="text-white">
          If your visit first time please{" "}
          <Link to="/signup" className="text-red-800">
            Signup Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
