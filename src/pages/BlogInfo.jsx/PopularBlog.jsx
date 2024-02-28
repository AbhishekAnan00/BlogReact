import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularBlogCard } from "./PopularBlogCard";
import { fetchRelatedBlogs } from "../../redux/RelatedBlog/RelatedBlogSlice";

const PopularBlog = ({currentVideoId, tags}) => {
  const dispatch = useDispatch();
  const { relatedBlog, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlog
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  // console.log(relatedBlog);

  return (
    <section className="text-gray-600 mt-12">
      <h2 className="text-3xl font-bold mt-3">Popular Blogs</h2>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          {
            relatedBlog.length > 0 ? relatedBlog.slice(0, 3).map((blog, index) => <PopularBlogCard blog={blog} key={index}/>) : <div>No related blog found</div>
          }
        </div>
      </div>
    </section>
  );
};

export default PopularBlog;