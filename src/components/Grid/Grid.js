import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../Ui/Loading";
import VideoGridItem from "./VideoGridItem";

const Grid = () => {
  const dispatch = useDispatch();
  const { videos, loading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  // decide what to render
  let content;

  if (loading) content = <Loading />;

  if (!loading && isError) content = <div className="col-span-12">{error}</div>;

  if (!isError && !loading && videos?.length === 0)
    content = <div className="col-span-12">No videos found!</div>;
  if (!isError && !loading && videos?.length > 0)
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default Grid;
