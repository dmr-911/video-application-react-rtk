import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideoList from "../components/List/RelatedVideoList";
import Player from "../components/VideoDescription/Player";
import VideoDescription from "../components/VideoDescription/VideoDescription";
import { fetchVideo } from "../features/video/videoSlice";
import Loading from "../components/Ui/Loading";

const Video = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { error, isError, loading, video } = useSelector(
    (state) => state.video
  );

  // effect for video dispatch
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  const { link, title, id, tags } = video || {};

  // decide what to render
  let content = null;
  if (loading) content = <Loading />;

  if (!loading && isError) content = <div className="col-span-12">{error}</div>;

  if (!loading && !error && !video?.id)
    content = <div className="col-span-12">No video found!</div>;

  if (!loading && !error && video?.id)
    content = (
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        {/* <!-- video player --> */}
        <Player link={link} title={title} />

        {/* <!-- video description --> */}
        <VideoDescription video={video} />
      </div>
    );

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            {content}
            {/* <!-- related videos --> */}
            <RelatedVideoList currentVideoId={id} tags={tags} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
