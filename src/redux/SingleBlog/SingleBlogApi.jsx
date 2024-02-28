import Axios from "../../components/Axios";

export const getBlog = async (id) => {
  const res = await Axios.get(`/blogs/${id}`);
  return res.data;
};