import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { LoginUser } = useContext(AuthContext); // Now 'LoginUser' will work
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    LoginUser(email, password)
      .then((res) => {
        navigate("/");
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="m-20 bg-white border p-3 w-fit">
      <p className="Text-xl font-semibold text-center">Login</p>
      <form className="relative" onSubmit={handleSubmit}>
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
            type={showPassword ? "text" : "password"} // Fixed typo from 'Password'
            placeholder=""
            name="password"
          />
          <div className="absolute flex justify-end right-4 -mt-8">
            {showPassword ? (
              <IoEyeOutline
                onClick={() => setShowPassword(!showPassword)}
                className="h-6 w-6"
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => setShowPassword(!showPassword)}
                className="h-6 w-6"
              />
            )}
          </div>
        </span>
        <p className="text-sm text-red-500">Forget Password</p>
        <button className="bg-blue-500 w-full py-2 font-semibold text-white rounded mt-2 hover:bg-blue-900">
          Login
        </button>
        <span className="divider text-xl">or</span>
        <Link to={"/registration"}>
          <p className="link text-center">don&apos;t have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
