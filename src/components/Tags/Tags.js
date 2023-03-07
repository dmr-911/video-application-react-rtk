import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import Loading from "../Ui/Loading";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags, loading, isError, error } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  // content
  let content;

  if (loading) content = <Loading />;

  if (!loading && isError) content = <div className="col-span-12">{error}</div>;

  if (!isError && !loading && tags?.length === 0)
    content = <div className="col-span-12">No videos found!</div>;
  if (!isError && !loading && tags?.length > 0)
    content = tags.map((tag) => <Tag key={Tag.id} tag={tag} />);

  return (
    <section>
      <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  );
};

export default Tags;
