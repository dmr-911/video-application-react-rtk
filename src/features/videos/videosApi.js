import { axiosInstance } from "../../utils/axios";

export const getVideos = async ({ tags, search }) => {
  let queryString = "";

  if (tags?.length) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }
  const response = await axiosInstance.get(`videos/?${queryString}`);
  return response.data;
};
