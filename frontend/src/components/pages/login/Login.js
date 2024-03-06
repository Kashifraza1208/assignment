import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../redux/userActions";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { toast } from "react-hot-toast";
import Loader from "../loading/Loader";

// import useLogin from "../../components/hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="flex flex-col items-center justify-center min-w-100 mx-auto login ">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
              <h1 className="text-3xl font-semibold text-center text-gray-300">
                Login <span className="text-blue-500">ChatApp</span>
              </h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="label p-2">
                    <span className="text-base text-gray-300 label-text">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full text-white input bg-black input-bordered h-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label p-2">
                    <span className="text-base text-gray-300 label-text">
                      Password
                    </span>
                  </label>
                  <div className="flex">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="w-full bg-black text-white input input-bordered h-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                      <FaEye
                        onClick={togglePassword}
                        className="right-8 absolute mt-3 cursor-pointer text-gray-600"
                      />
                    ) : (
                      <GoEyeClosed
                        onClick={togglePassword}
                        className="right-8 absolute mt-3 cursor-pointer text-gray-400"
                      />
                    )}
                  </div>
                </div>
                <Link
                  to="/signup"
                  className="text-sm hover:underline text-gray-300 hover:text-blue-600 mt-2 inline-block"
                >
                  Don't have an account?
                </Link>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-block bg-purple-950 text-white hover:bg-purple-700 outline-none border-0 btn-sm mt-2"
                  >
                    {loading ? (
                      <span className=" text-gray-100 loading loading-spinner"></span>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Login;
