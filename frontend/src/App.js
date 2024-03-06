import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignUp from "./components/pages/signup/SignUp";
import Home from "./components/pages/home/Home.js";
import Login from "./components/pages/login/Login.js";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { getPost } from "./components/redux/postActions.js";

// import SignUp from "./components/pages/signup/SignUp";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <div className="h-screen  flex flex-col items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/" /> : <SignUp />}
          />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
