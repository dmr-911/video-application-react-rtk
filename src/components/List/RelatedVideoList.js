import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Error from "../Ui/Error";
import Loading from "../Ui/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";

const RelatedVideoList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { loading, relatedVideos, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  // effect for related video fetch
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  // decide what to render
  let content;
  if (loading) content = <Loading />;

  if (!loading && isError) content = <Error error={error} />;

  if (!loading && !isError && !relatedVideos?.length)
    content = <div className="col-span-12">No related videos found</div>;

  if (!loading && !isError && relatedVideos?.length)
    content = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
