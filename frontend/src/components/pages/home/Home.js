import React from "react";
import Posts from "../posts/Posts";

const Home = () => {
  return (
    <div className="flex w-full sm:h-[450px] md:h-[100vh] rounded-lg overflow-auto p-5">
      <Posts />
    </div>
  );
};

export default Home;
