import React from "react";
import RelatedVideoList from "../components/List/RelatedVideoList";
import Player from "../components/VideoDescription/Player";
import VideoDescription from "../components/VideoDescription/VideoDescription";

const Video = () => {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              {/* <!-- video player --> */}
              <Player />

              {/* <!-- video description --> */}
              <VideoDescription />
            </div>

            {/* <!-- related videos --> */}
            <RelatedVideoList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
