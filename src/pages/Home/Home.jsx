import React from "react";
import Banner from "./Banner";
import BlogCard from "../BlogInfo.jsx/BlogCard";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        <BlogCard/>
        <Category/>
        </div>
    </div>
  );
};

export default Home;
