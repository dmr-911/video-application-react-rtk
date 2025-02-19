import { axiosInstance } from "../../utils/axios";

export const getRelatedVideos = async ({ tags, id }) => {
  const limit = 5;

  let queryString = tags?.length
    ? tags.map((tag) => `tags_like=${tag}`).join("&") +
      `&id!==${id}&_limit${limit}`
    : `&id_ne!==${id}&_limit${limit}`;

  const response = await axiosInstance.get(`videos?${queryString}`);
  return response.data;
};
