import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";;
import {getRelatedBlogs} from "./RelatedBlogApi"
const initialState = {
    relatedBlog: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchRelatedBlogs = createAsyncThunk(
    "relatedBlog/fetchRelatedBlogs",
    async ({ tags, id }) => {
        const relatedBlogs = await getRelatedBlogs({ tags, id });
        return relatedBlogs;
    }
);

const RelatedBlogsSlice = createSlice({
    name: "relatedBlog",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedBlogs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedBlog = action.payload;
            })
            .addCase(fetchRelatedBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedBlog = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default RelatedBlogsSlice.reducer;