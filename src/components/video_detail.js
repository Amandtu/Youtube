import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  const videoid = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoid}`;
  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item" />
      </div>
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;