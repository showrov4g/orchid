import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const navigate = useNavigate();
  const { createUser, user, setUser, loginWithGoogle,updateUserProfile } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const googleLogin = () => {
    loginWithGoogle()
      .then((data) => {
        toast.success("Successfully Login With Google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const onSubmit = (data) => {
    const { name, email, password, PhotoURL } = data;
    createUser(email, password)
      .then((result) => {
        updateUserProfile({displayName:name, photoURL: PhotoURL})
        toast.success("You have successfully create your account");
        const createdAt = result?.user?.metadata?.creationTime;
        const user = result.user;
        setUser(user);
        const newUser = { email, PhotoURL, createdAt };

        fetch("https://orchid-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error(`Something went wrong ${err}`);
      });
  };

  return (
    <div className="card bg-gradient-to-b from-violet-500 to-fuchsia-500 max-w-lg shrink-0 shadow-2xl flex mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h1 className="text-3xl text-white font-bold">Register Now</h1>
        <label htmlFor="name" className="text-2xl text-white">
          Enter your Name
        </label>
        <input
          className="text-2xl p-3 rounded-xl outline-none"
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">
            Name is required
          </p>
        )}
        <label htmlFor="email" className="text-2xl text-white">
          Enter your email
        </label>
        <input
          className="text-3xl p-3 rounded-xl outline-none"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">
            Email is required
          </p>
        )}
        <label htmlFor="Photo url" className="text-2xl text-white">
          Enter your Photo URL
        </label>
        <input
          className="text-3xl p-3 rounded-xl outline-none"
          type="url"
          placeholder="Photo URL"
          {...register("PhotoURL", { required: true })}
          aria-invalid={errors.PhotoURL ? "true" : "false"}
        />
        {errors.PhotoURL?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">
            Photo url is required
          </p>
        )}
        <label htmlFor="password" className="text-2xl text-white">
          Set your password
        </label>
        <input
          className="text-3xl p-3 rounded-xl outline-none"
          type="password"
          placeholder="password"
          {...register(
            "password",
            { required: true },
            {
              max: 10,
              min: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
            }
          )}
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">
            Password is required
          </p>
        )}

        <input
          className="btn bg-green-600 hover:bg-green-700 text-xl border-none text-white"
          type="submit"
          value="Sign Up"
        />
        <p className="text-white">
          Already you have a account please:{" "}
          <Link to="/login" className="text-red-800">
            Login Now
          </Link>
        </p>
      </form>
      <div className="px-4">
        <hr />
        <h3 className="text-center text-white">OR</h3>
        <hr />
        <button onClick={googleLogin} className="btn w-full text-xl my-4">
          {" "}
          <FcGoogle /> Login With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
