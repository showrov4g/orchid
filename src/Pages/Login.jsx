import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser, setUser,loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const googleLogin =()=>{
    loginWithGoogle()
    .then(data=> {
      toast.success("Successfully Login With Google");
      navigate(location?.state ? location.state : "/");
    })
    .catch(err=>{
      toast.error(err.message)
    })
  }
  const onSubmit = (data) => {
    const { email, Password } = data;
    signInUser(email, Password)
      .then((result) => {
        console.log(result)
        const user = result.user;
        setUser(user);
        toast.success("User Login Successful");
        navigate(location?.state ? location.state : "/");
        const lastSignInTime = result.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };
        fetch(`https://orchid-server.vercel.app/users`,{
          method: "PATCH",
          headers:{
            "content-type": "application/json"
          },
          body: JSON.stringify(loginInfo)
        })
        .then(res=> res.json())
        .then(data=>{"Sign in info update",console.log(data)})
        .catch(err=>console.log(err))

        
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="card bg-gradient-to-b from-violet-500 to-fuchsia-500 max-w-lg shrink-0 shadow-2xl flex mx-auto ">
     
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body"
      >
         <h1 className="text-3xl text-white font-bold">Login Now</h1>
        <label htmlFor="email" className="text-2xl text-white">
          Email
        </label>
        <input
          className="text-2xl p-3 rounded-xl outline-none"
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
          className="text-2xl p-3 rounded-xl outline-none"
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
        <Link>Forget Password</Link>
        <input
          className="btn bg-green-600 hover:bg-green-700 text-xl border-none text-white"
          type="submit"
          value="Login Now"
        />
        <p className="text-white">
          If your visit first time please{" "}
          <Link to="/signup" className="text-red-800">
            Signup Now
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

export default Login;
