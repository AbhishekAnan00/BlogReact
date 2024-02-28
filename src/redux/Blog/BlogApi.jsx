import Axios from "../../components/Axios";

export const getBlogs = async (tags, search) => {
  let queryString = "";

  if (tags.length) {
    queryString += `tags_like=${tags.join(",")}`;
  }

  if (search !== "") {
    queryString += `${queryString ? "&" : ""}q=${search}`;
  }

  try {
    const response = await Axios.get(`/blogs/?${queryString}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
