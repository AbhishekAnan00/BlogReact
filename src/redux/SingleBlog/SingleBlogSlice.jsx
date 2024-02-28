import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog } from "./SingleBlogApi";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};
// async thunk
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

const SingleBlogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        (state.isError = false), (state.isLoading = true), (state.blog = {});
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        (state.isLoading = false), (state.blog = action.payload);
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        (state.blog = {}),
          (state.isLoading = false),
          (state.isError = true),
          (state.error = action.error?.message);
      });
  },
});
export default SingleBlogSlice.reducer;
