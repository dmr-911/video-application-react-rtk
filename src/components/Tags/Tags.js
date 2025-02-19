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

  return tags?.length ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag key={tag?.id} tag={tag} />
        ))}
      </div>
    </section>
  ) : null;
};

export default Tags;
