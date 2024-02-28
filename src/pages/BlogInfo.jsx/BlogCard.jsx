import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/Blog/BlogSlice";
import BlogSingleCard from "./BlogSingleCard";
const BlogCard = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  //FILTER
  const { tags, search } = useSelector((state) => state.filter);
  // console.log(tags, search);
  //pagination
  const [page, setPage] = useState(1);
  const blogPerPage = 5;

  //dispatch action to get blogs
  useEffect(() => {
    dispatch(fetchBlogs({ tags, search }));
  }, [dispatch, tags, search]);

  const startIndex = (page - 1) * blogPerPage;
  const endIndex = page * blogPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  // console.log(blogs);
  return (
    <div className="w-full lg:w-2/3">
      {!isError && !isLoading && paginatedBlogs?.length > 0 ? (
        <div>
          {paginatedBlogs.map((blog, index) => (
            <BlogSingleCard key={index} blog={blog} />
          ))}

          {/* pagination */}
          <div className="space-x-3 mt-3">
            <button
              className="px-2 bg-red-500 text-white rounded cursor-pointer"
              onClick={() => handleChangePage(page - 1)}
              disabled={page === 1}
            >
              Prev
            </button>
            <span>{page}</span>
            <button
              className="px-2 bg-blue-500 text-white rounded cursor-pointer"
              onClick={() => handleChangePage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>No Blogs Available</div>
      )}
    </div>
  );
};

export default BlogCard;
