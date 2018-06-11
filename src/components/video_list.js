import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = ({ videos, VideoSelect }) => {
  const output = videos.map(video => {
    return (
      <VideoListItem VideoSelect={VideoSelect} key={video.etag} video={video} />
    );
  });

  return <ul className="col-md-4">{output}</ul>;
};

export default VideoList;
