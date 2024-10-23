import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassoword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayImage = e.target.name.value;
    createUser(email, password, displayImage)
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        updateProfile(user, {
          displayName: displayImage, // You can also set photoURL here if needed
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(name, email, password);
  };
  return (
    <div className="m-20 bg-white border p-3 w-fit">
      <p className="Text-xl font-semibold text-center">Registration</p>
      <form className="relative flex flex-col" onSubmit={handleSubmit}>
        <span>
          <p>Name</p>
          <input
            className="p-2 bg-base-200 rounded w-72"
            type="text"
            placeholder="Fahim Farhad"
            name="name"
          />
        </span>
        <span>
          <p>Email</p>
          <input
            className="p-2 bg-base-200 rounded w-72"
            type="text"
            placeholder="Email-fahim@gmail.com"
            name="email"
          />
        </span>
        <span>
          <p>Password</p>
          <input
            className="p-2 bg-base-200 rounded w-72"
            type={showPassoword ? "text" : "Password"}
            placeholder=""
            name="password"
          />
          <div className="absolute flex justify-end right-4 -mt-8">
            {showPassoword ? (
              <IoEyeOutline
                onClick={() => setShowPassword(!showPassoword)}
                className="h-6 w-6"
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => setShowPassword(!showPassoword)}
                className="h-6 w-6"
              />
            )}
          </div>
        </span>
        <button className="bg-blue-500 w-72 py-2 font-semibold text-white rounded mt-2 hover:bg-blue-900">
          Registration
        </button>
        <span className="divider text-xl">or</span>
        <Link to={"/login"}>
          {" "}
          <p className="link text-center">Already have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
