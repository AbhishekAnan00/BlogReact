import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./Blog/BlogSlice";
import SingleBlogReducer from "./SingleBlog/SingleBlogSlice";
import filterReducer from "./Filter/FilterSlice";
import relatedBlogReducer from "./RelatedBlog/RelatedBlogSlice";
export const store = configureStore({
  reducer: {
    blogs: BlogReducer,
    blog: SingleBlogReducer,
    filter: filterReducer,
    relatedBlog: relatedBlogReducer,
  },
});
