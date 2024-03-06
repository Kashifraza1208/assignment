import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Posts() {
  let limit = 15;
  let page = 1;

  const posts = useSelector((state) => state.posts);
  const [isFetching, setIsFetching] = useState(posts.loading);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }

  function getMorePosts() {
    setTimeout(() => {
      page++;
      setIsFetching(false);
    }, 2000);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    getMorePosts();
  }, [isFetching]);

  return (
    <section class="pt-20 bg-white  pb-10 lg:pb-20">
      <div class="container">
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span class="font-semibold text-lg text-primary mb-2 block">
                Posts
              </span>
              <h2
                class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                Our Recent Posts
              </h2>
              <p class="text-base text-body-color">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus natus asperiores voluptate quo corporis consequatur
                debitis repellat? Modi qui et doloremque maxime, laboriosam
                itaque minus! Doloribus quidem nulla adipisci minus!
              </p>
            </div>
          </div>
        </div>
        <div class="flex bg-white flex-wrap -mx-4">
          {posts.posts.map((post, index) => (
            <div key={index} class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="max-w-[300px] mx-auto mb-10">
                <div class="rounded overflow-hidden mb-8">
                  <img src={post.profilePic} alt="image" class="w-full" />
                </div>
                <div>
                  <span
                    class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    March 6, 2024
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p class="text-base text-body-color">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Posts;
