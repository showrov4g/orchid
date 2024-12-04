import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = (data) => {
    const { email, Password } = data;
    signInUser(email, Password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("User Login Successful");
        navigate(location?.state ? location.state : "/");
        const lastSignInTimes = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTimes };
        fetch("https://orchid-server.vercel.app/users", {
          method: "PATCH",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
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
          placeholder="email"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
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
