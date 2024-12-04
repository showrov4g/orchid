import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Signup = () => {
  const { createUser, user, setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, PhotoURL } = data;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        toast.success("You have successfully create your account");
        console.log(result.user.metadata.creationTime);
        const createdAt = result?.user?.metadata?.creationTime;
        const newUser = { email, password, PhotoURL, createdAt };

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
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-[#219B9D] p-14 rounded-xl space-y-2"
      >
        <label htmlFor="name" className="text-2xl text-white">
          Enter your Name
        </label>
        <input
          className="text-2xl p-3 rounded-xl"
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
          className="text-3xl p-3 rounded-xl"
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
          className="text-3xl p-3 rounded-xl"
          type="url"
          placeholder="Photo URL"
          {...register("PhotoURL", { required: true })}
        />
        <label htmlFor="password" className="text-2xl text-white">
          Set your password
        </label>
        <input
          className="text-3xl p-3 rounded-xl"
          type="password"
          placeholder="password"
          {...register("password",{ required: true } , {
            max: 10,
            min: 6,
            pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
          })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password?.type === "required" && (
          <p className="text-red-600 text-xs" role="alert">
            Password is required
          </p>
        )}

        <input className="btn bg-green-600 hover:bg-green-700 text-xl border-none text-white" type="submit" value="Sign Up"/>
      </form>
    </div>
  );
};

export default Signup;
